import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  Courses ;

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = false;
  nama = 'serildawn';
  onSave($event){
    console.log("button sudah diklik", $event)
  }
  
  onDivClick($event){
    console.log("ini method div", $event)
  }

  onKeyUp(nama) {
    console.log(nama);
  }
  constructor(private service: CoursesService) {
    this.Courses=service.getCourses();
   }

  ngOnInit() {
  }

}
