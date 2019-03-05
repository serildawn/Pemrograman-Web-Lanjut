#Laporan JS3
---
####Praktikum bagian 1
- Membuat	sebuah	componen dengan	nama courses dengan	cara ` ng g	c courses `.
- Membuka	file	app.component.html,	lakukan	modifikasi	code	nya	menjadi	seperti	berikut	:

```
<app-courses></app-courses>

<router-outlet></router-outlet>
```
- Kemudian open	terminal dan menjalan kan perintah `ng	serve `.

 ![](image/chapter1/j3soal2.jpg)

- Membuka file	app.modules.ts	dan	hapus coursecomponent pada declarations, maka hasilnya :
 ![](image/chapter1/j3soal3.jpg)
 
- Kemudian	melakukan	inspect	pada halaman localhost:	4200 di	browser
 ![](image/chapter1/j3soal4.jpg)

---
####Praktikum bagian 2
- Membuka	file courses.component.ts tambahkan	property baru dengan nama title.
 ![](image/chapter1/pr2.1.jpg)

- Kemudian	membuka	browser	localhost:4200.	
 ![](image/chapter1/j3soal5.jpg)

- Menambahkan string pada	binding	datanya. Buka file courses.component.html.	        tambahkan	seperti	berikut	:

```
<p>
  courses works!
</p>
<p>
  {{"judulnya:" + title}}
</p>

```
- Maka hasilnya :

 ![](image/chapter1/j3soal6.jpg)

- Membuka	file	courses.component.ts	dan	membuat	sebuah	method	dengan	nama	getTitle	seperti	berikut	ini	:

 ![](image/chapter1/pr2.5.jpg)

- Kemudian	buka	file	courses.component.html,	lakukan	modifikasi	seperti	berikut	:	
 ![](image/chapter1/pr2.6.jpg)

- Maka hasilnya :

 ![](image/chapter1/j3soal7.jpg)

---

####Praktikum bagian 3
- Buka	file	courses.component.ts	dan	buat	property	dengan	nama	course	dengan	data	berupa	array.

``` 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  Title() {
    return this.title;
  }
  Courses = [
    {id: 0, name: 'HTML'},
    {id: 1, name: 'PHP'},
    {id: 2, name: 'ANGULAR'},
    {id: 3, name: 'C#'},
    {id: 4, name: 'VB.NET'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

```

- Buka	file	courses.component.html	lalu	tambahkan	directive	ngFor	dan	string	interpolation	seperti	berikut	:	
  ![](image/chapter1/pr3.2.jpg)

- Maka hasilnya.

 ![](image/chapter1/j3soal8.jpg)
---
####Praktikum bagian 4
- Membuat service baru	yang bernama courses dengan	perintah : ` ng	g s	courses `.
- Membuka	file ` courses.service.ts `	kemudian menambahkan method	getCourse seperti	berikut	:	

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return[
    {id:0, name: 'HTML'},
    {id:1, name: 'PHP'},
    {id:2, name: 'ANGULAR'},
    {id:3, name: 'C#'},
    {id:4, name: 'VB.NET'}
    ];
  }
}

```
- Membuka	file ` courses.component.ts `, kemudian	melakukan modifikasi codenya seperti	berikut	:	

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  Title() {
    return this.title;
  }
  Courses;

  constructor() { }

  ngOnInit() {
  }

}

```
- Maka hasilnya :

![](image/chapter1/j3soal10.jpg)

- Menambahkan	constructor	seperti	berikut	:	

```

import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  Title() {
    return this.title;
  }
  Courses;

  constructor(private service:CoursesService) { 
    this.Courses = service.getCourses();
  }

  ngOnInit() {
  }

}

```
- Maka hasilnya :

 ![](image/chapter1/j3soal11.jpg)

	
