import { Component, OnInit } from '@angular/core';
import { SwUpdate} from '@angular/service-worker';
import { HttpService } from "../http.service";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  madeUpdate = false;

  newJokes:any;
 
    constructor(private updates: SwUpdate, 
      private httpCall: HttpService){

      updates.available.subscribe(event => {
          this.madeUpdate = true;

      })
    };



    ngOnInit(){
      this.httpCall.getData().subscribe(res =>{
          this.newJokes = res;
      })
    
    };


}
