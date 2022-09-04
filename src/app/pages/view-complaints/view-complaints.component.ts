import { Component, OnInit } from '@angular/core';
import { ViewComplaintService } from 'src/app/services/view-complaint.service';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit {

  submitted = false;
  users: any;

  constructor(private viewComplaintService:ViewComplaintService) { 
    this.viewComplaintService.getPosts().subscribe(result =>{
       this.users = result;
    });
  }

  ngOnInit(): void {
  }

}
