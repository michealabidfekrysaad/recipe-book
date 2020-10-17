import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }


  onClickRecipe() {
    if (screen.width >= 768) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

}
