import { Component } from '@angular/core';
import { SwUpdate} from '@angular/service-worker';
import { HttpService } from "./http.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'MCC';

  // myUpdate variable

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
      }) ;
    };

}

