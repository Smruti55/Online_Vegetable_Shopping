import { Component, OnInit } from '@angular/core';

import { ViewFeedbackService } from 'src/app/services/view-feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
 

  submitted = false;
  users: any;
  constructor(private viewFeedBackService:ViewFeedbackService) { 
    this.viewFeedBackService.getPosts().subscribe(result =>{
       this.users = result;
    });
  }

  ngOnInit(): void {
  }
}
  

