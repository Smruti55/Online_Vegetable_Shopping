import { Component, OnInit } from '@angular/core';
import { DeleteVegetableService } from 'src/app/services/delete-vegetable.service';

@Component({
  selector: 'app-delete-vegetable',
  templateUrl: './delete-vegetable.component.html',
  styleUrls: ['./delete-vegetable.component.css']
})
export class DeleteVegetableComponent implements OnInit {

  constructor(private deleteVegetableService:DeleteVegetableService) { }


   ngOnInit(): void {
  }
   deleteVeg(vegId:any){
    this.deleteVegetableService.deleteVeg(vegId).subscribe(data=> {
      console.log("Vegetable deleted successfully"+data);
    
  
    });
  }

    //   console.log("Vegetable deleted successfully"+data);
    // },(err) => {
    //   console.log("Unable to delete the user"+err );
    // }
    // })
  }