import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { HeaderService } from 'src/app/services/header.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute, public header:HeaderService) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAll();
    })


  }

  ngOnInit(): void {
    this.header.show()
  }


}
