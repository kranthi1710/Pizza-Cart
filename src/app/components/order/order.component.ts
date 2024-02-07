import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import products from "../../../assets/Products.json";
import { Subject } from 'rxjs';
import { OrderpageService } from '../../orderpage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public productsList: any=products;
  constructor(public orderpageService: OrderpageService) { }

  ngOnInit(): void {
  }

  removeItem(p:any){

  }

  addItem(p:any){
    this.orderpageService.emitdata(p);
  }

}
