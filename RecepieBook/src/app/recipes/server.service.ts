import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from './recipe.model';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  dbUrl = 'https://aolpmt-cf7bb.firebaseio.com/recipes.json';
  constructor(private http : Http) { }

  saveRecipes(recipes : Recipe[]) {
    return this.http.put(this.dbUrl, recipes)
    .map((res : Response) => {
      return res.json();
    });
  }

  getRecipes() {
    return this.http.get(this.dbUrl)
    .map((res : Response) => {
      const recipes : Recipe[] = res.json();
      for(let recipe of recipes) {
        if(!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes ;
    });
  }

}
