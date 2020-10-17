import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], resolve:[RecipeResolverService] , children: [
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent},


    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },

  
  { path: '**', redirectTo: 'recipes', },



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
