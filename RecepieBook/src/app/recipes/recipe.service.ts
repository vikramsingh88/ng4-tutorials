import { Injectable } from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
     'This is simply test','http://media3.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls.jpg',
      [new Ingredient('Meat', 1),new Ingredient('French Fries', 20)]),
    new Recipe('A test recipe 2',
    'This is simply test 2',
    'http://media3.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls.jpg',
    [new Ingredient('Buns', 2),new Ingredient('Meat', 2)])
  ];
  constructor(private slService : ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id : number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
