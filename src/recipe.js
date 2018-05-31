import uuidv4 from 'uuid';

const recipes = [{
    id: '123',
    title: 'Borsch',
    text: 'blah blah',
    ingredients: [{
        name: 'potato',
        checked: false
    }]
}, {
    id: '321',
    title: 'Soup',
    text: 'blah blah',
    ingredients: [{
        name: 'potato',
        checked: false
    }]
}];

const getRecipes = () => recipes;

const addRecipe = (recipe) => {
    const id = uuidv4();
    recipes.push(new Recipe(id, recipe.title, recipe.text))
}

const addIngredient = (ingredient) => {
    const ingredients = [];
    ingredient.push({
        ingredient,
        checked: false
    });
    return ingredients
}

class Recipe {
    constructor(id, title, recipeText, ingredients) {
        this.id = id;
        this.title = title;
        this.text = recipeText;
        this.ingredients = []
    }
    addIngredient(ingredient) {
        this.ingredients.push({
            ingredient: '',
            checked: false
        });
    }
    removeIngredient() {

    }
    countIngredients() {
        const count = this.ingredients.filter((ingredient) => {
            return (!ingredient.checked)
        });
        return count
    }
}


export { getRecipes, Recipe }

