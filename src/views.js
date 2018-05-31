import { getRecipes } from './recipe';

const recipes = getRecipes();

const renderRecipeList = () => {
    const countIngredients = document.createElement('p');
    const recipesList = document.querySelector('#recipes');

    recipesList.innerHTML = '';
    recipes.forEach((recipe) => {
        const recipeContainer = document.createElement('div');
        const recipeTitle = document.createElement('p');
        const link = document.createElement('a');
        link.setAttribute('href', `/edit.html#${recipe.id}`);
        recipeTitle.textContent = recipe.title;
        recipeContainer.appendChild(recipeTitle);
        link.appendChild(recipeContainer);
        recipesList.appendChild(link);
    });
}

export { renderRecipeList }