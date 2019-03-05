import { ServiceService } from './service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nama = 'Serilda Wahyu';
  alamat = 'Mojokerto';
  tanggal = Date.now();
  hobi : any[];
  constructor(private serv:ServiceService){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hobi = this.serv.getHobi();
  }
}
