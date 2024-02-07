import { Component } from '@angular/core';
import { OrderpageService } from './orderpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';
  cartItems:any[]=[];

  constructor(private orderpageService: OrderpageService) {
    this.orderpageService.onMessage().subscribe(
      (d) => console.log(d)
    )
   }
}
