import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  
  constructor(cartService:CartService,public header:HeaderService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
   }

  ngOnInit(): void {
  }

}
