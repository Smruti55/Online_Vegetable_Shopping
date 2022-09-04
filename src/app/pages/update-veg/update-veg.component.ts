import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateVegetableService } from 'src/app/services/update-vegetable.service';
import { ViewVegetableService } from 'src/app/services/view-vegetable.service';

@Component({
  selector: 'app-update-veg',
  templateUrl: './update-veg.component.html',
  styleUrls: ['./update-veg.component.css']
})
export class UpdateVegComponent implements OnInit {

  updateVeg = new FormGroup(
    {
      vegetableName: new FormControl(''),
      vegetablePrice: new FormControl(''),
      vegetableQuantity: new FormControl('')
    })
  vegItemsArray: any = [];

  constructor(private router: ActivatedRoute, private update: UpdateVegetableService,
    private viewVegetableService: ViewVegetableService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
   
    this.viewVegetableService.getPosts().subscribe(result => {
      this.vegItemsArray = result;
      var vegObject = this.vegItemsArray.filter((veg: any) => veg.vegetableId == this.router.snapshot.params.id);
      console.log(vegObject)
      this.updateVeg = new FormGroup({
        vegetableName: new FormControl(vegObject[0].vegetableName),
        vegetablePrice: new FormControl(vegObject[0].vegetablePrice),
        vegetableQuantity: new FormControl(vegObject[0].vegetableQuantity)
      })
    });
  }
  
  getInfo()
  {
    alert("Vegetable is updated successfully!")
  }
  updateVegatableForm() {
    console.warn("item", this.updateVeg.value)
    this.update.updateVegetable(this.router.snapshot.params.id, this.updateVeg.value).subscribe((result) => {
      console.warn('result', result)
    })
  }
  

}
