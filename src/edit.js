import { getRecipes } from './recipe';

const recipes = getRecipes();


const renderEdit = () => {
    if(location.hash.substring(1) === 'new') {
        console.log(location);
    } else if (location.hash.substring(1)) {
        const editId = location.hash.substring(1);
        const recipe = recipes.find((recipe) => recipe.id === editId);
        renderEditItem(recipe);
    }
}

const renderEditItem = (item) => {
    const recipeTitle = document.querySelector('#recipeTitle');
    const recipeText = document.querySelector('#recipeText');
    recipeTitle.value = item.title;
    recipeText.value = item.text
    console.log(item.ingredients);

    renderIngredients(item.ingredients);
}

const renderIngredients = (ingredients) => {
    const ingredientsEl = document.querySelector('#ingredients');
    ingredients.forEach((ingredient) => {
        const ingredientEl = document.createElement('div');
        const ingredientCheck = document.createElement('input');
        ingredientCheck.setAttribute('type', 'checkbox');
        const ingredientText = document.createElement('p');
        ingredientText.textContent = ingredient.name;
        const ingredientRemove = document.createElement('button');
        ingredientRemove.textContent = 'remove';
        ingredientEl.appendChild(ingredientCheck);
        ingredientsEl.appendChild(ingredientEl);


    });
}

renderEdit();