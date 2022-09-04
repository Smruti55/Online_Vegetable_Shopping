import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { FeedBack } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  users: any;
  feedbackForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder,
              private addfeedbackService: FeedBack, 
              public header:HeaderService){}

  ngOnInit(): void {
    this.header.show();
    this.feedbackForm = this.formBuilder.group({
      description:new FormControl("")
    });
  }

  submitFeedBack(){
    console.warn(this.feedbackForm.value)
    this.addfeedbackService.feedback(this.feedbackForm.value).subscribe(result =>{
      alert("Feedback updated successfully.")
    });
  } 
}
