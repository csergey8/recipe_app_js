import { getRecipes } from './recipe';
import { renderRecipeList } from './views';




renderRecipeList();


document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('/edit.html#new');
})

