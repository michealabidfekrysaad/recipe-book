import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {

    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put('https://ng-course-recipe-book-c3409.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
            }
            )
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>('https://ng-course-recipe-book-c3409.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    if (recipes) {

                        return recipes.map(recipe => {
                            return {
                                ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                            };
                        })
                    } else {
                        return null;
                    };
                }), tap(recipes => {
                    if (recipes) {
                        this.recipeService.setRecipes(recipes);
                    }
                }));


    }

}
