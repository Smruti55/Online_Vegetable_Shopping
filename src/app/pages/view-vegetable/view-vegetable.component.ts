


import { Component, OnInit } from '@angular/core';
import { ViewVegetableService } from 'src/app/services/view-vegetable.service';

import { DeleteVegetableService } from 'src/app/services/delete-vegetable.service';

@Component({
  selector: 'app-view-vegetable',
  templateUrl: './view-vegetable.component.html',
  styleUrls: ['./view-vegetable.component.css']
})
export class ViewVegetableComponent implements OnInit {


  // deleteVegetableService: any;
  constructor(private viewVegetableService: ViewVegetableService,
    private deleteVegetableService: DeleteVegetableService) { }
  collection: any = [];

  ngOnInit(): void {

    this.viewVegetableService.getPosts().subscribe(result => {
      this.collection = result;
      console.log(this.collection)
    });

  }

  deleteVeg(item: number) {
    console.warn(this.collection)
    this.collection.splice(item - 1, 1)
    this.deleteVegetableService.deleteVeg(item).subscribe((result: any) => {
      console.warn(result)

      
    }) 
    alert("Vegetable is deleted!")
  }

}

