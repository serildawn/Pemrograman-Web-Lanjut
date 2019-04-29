import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-angular';
  courses=[1,2];

  coursesFor=[
    {id:1, name:'courses1'},
    {id:2, name:'courses2'},
    {id:3, name:'courses3'},
    {id:4, name:'courses4'},
    {id:5, name:'courses5'},
  ]

  viewMode='map';
  onAdd()
  {
    this.coursesFor.push({id:6,name:'courses6'});
  }
  onRemove(item)
  {
    console.log(item);
    let index=this.coursesFor.indexOf(item);
    console.log(index);
    this.coursesFor.splice(index,1);
  }
  onChange(item)
  {
    item.name='Updated';
  }
  coursesForOne;
  loadCourses(){
    this.coursesForOne=[
    {id:1, name:'courses1'},
    {id:2, name:'courses2'},
    {id:3, name:'courses3'},
    {id:4, name:'courses4'},
    {id:5, name:'courses5'},
  ];
  }
  trackCourse(index,itemone)
  {
    return itemone ? itemone.id : undefined;
  }
}