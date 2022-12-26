import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Plain Dosa',
      'Only Dosa',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'Masala Dosa',
      'Aloo masala dosa',
      'data:image/jpeg;base64,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'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
