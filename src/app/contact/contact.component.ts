import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  complaint = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.complaint) this.complaint = params.complaint;
    });
   }

  ngOnInit(): void {
  }
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }


  getdata()
  {
    alert("Your complaint has been registered")
  }

}
