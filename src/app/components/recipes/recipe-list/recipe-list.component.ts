import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:  Recipe [] = [
  new Recipe('A test recipe', ' this is simply a test',
    'https://images.immediate.co.uk/production/volatile/sites/30/2022/02/vegetarian-lasagne-5ee6162.jpg?resize=960,872?quality=90&webp=true&resize=375,341'),

  new Recipe('A test recipe', ' this is simply a test',
    'https://images.immediate.co.uk/production/volatile/sites/30/2022/02/vegetarian-lasagne-5ee6162.jpg?resize=960,872?quality=90&webp=true&resize=375,341')
];
  constructor() { }

  ngOnInit(): void {
  }

}
