import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddVegtableService } from 'src/app/services/add-vegtable.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-add-vegetable',
  templateUrl: './add-vegetable.component.html',
  styleUrls: ['./add-vegetable.component.css']
})
export class AddVegetableComponent implements OnInit {
  users: any;

  constructor(private addVegtableService: AddVegtableService, public header:HeaderService){
    this.addVegtableService.users().subscribe((data) => {
      this.users = data;
    });
  }
  ngOnInit(): void {
    this.header.show()
}
getUserFormData(data:any){
  console.warn(data)

  this.addVegtableService.createUser(data).subscribe(result =>{
    console.warn(result)
    alert("Vegetable is added in store")
   
  });
}

getInfo()
{
  alert("Vegetable is successfully added in store")
}

}