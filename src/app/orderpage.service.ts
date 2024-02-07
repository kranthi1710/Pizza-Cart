import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderpageService {
  private data = new Subject<any>();
  constructor() { }

  public emitdata(x: any){
    this.data.next(x);
  }

  public onMessage(): Observable<any> {
    return this.data.asObservable();
}


}
