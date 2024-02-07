import { Component, OnInit } from '@angular/core';
import { OrderpageService } from '../../orderpage.service';
import products from "../../../assets/Products.json";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public productsList: any=products;
  cartItems:any[]=[];
  cartItem:any;

  constructor(private orderpageService: OrderpageService) {
    this.orderpageService.onMessage().subscribe(
      (d) => console.log(d)
    )
   }

  ngOnInit() {
    console.log("mane",this.orderpageService.onMessage().subscribe(d=>d));
    
  }

}
