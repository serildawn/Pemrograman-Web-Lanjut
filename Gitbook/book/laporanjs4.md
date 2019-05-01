# Laporan JS4
---
#### Praktikum bagian 1
- Membuka file ** course.component.ts ** menambahkan code berikut ini :

```
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Title = 'Belajar Angular';
  Courses;

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';

  constructor(private service:CoursesService) { 
    this.Courses = service.getCourses;
  }

  ngOnInit() {
  }

}

```

- Membuka file ** course.component.html ** tambahkan code berikut ini :
```
<p>
  {{ Title }}
</p>
<table>
  <thead>
    <th>
      #ID
    </th>
    <th>Course name</th>
  </thead>
  <tbody>
    <tr *ngFor = "let Course of Courses">
    <td>{{ Course.id }}</td>
    <td>{{ Course.name }}</td>
    </tr>
  </tbody>
</table>

<h2>{{ binding }}</h2>
<h2 [textContent]='binding'></h2>

<img src="{{imageUrl}}" />
<img [src]="imageUrl" />

```

- Lalu hasilnya :

![](image/chapter1/j4soal1.png)

---
#### Praktikum bagian 2
- Membuka file **courses.component.ts** tambahkan property colspan dibawah line imageUrl.

![](image/chapter1/p2.1.png)

- Membuka file **courses.component.html** dan menambahkan berikut ini :

![](image/chapter1/p2.2.png)

- Lalu muncul error seperti :

![](image/chapter1/error.png)

- Menambahkan attr pada colspan seperti berikut :

![](image/chapter1/p2.4.png)

- Setelah di compile maka hasilnya : 

![](image/chapter1/j4soal2.png)

- Selanjutnya menambahkan button pada **courses.component.html** seperti berikut :
![](image/chapter1/p2.6.png)

- Maka hasilnya seperti berikut :

![](image/chapter1/j4soal3.png)

---
#### Praktikum bagian 3
- Buka file ** courses.component.ts ** kemudian menambah propery ` isActive = true ` setelah line ` colspan = 2;`.

 ![](image/chapter1/p3.1.png)

- Merubah ` isActive ` menjadi false.

 ![](image/chapter1/p3.3.png)

---
#### Praktikum bagian 4
- Membuka file ** courses.component.html ** kemudian tambahkan code berikut :

```
<button type = 'button' class = "btn btn-primary" [style.backgroundColor] = "isActive?'blue':'white'" > Tambah </button>

```

---
#### Praktikum bagian 5
- Membuka file ** course.component.ts ** dan buatlah method dengan nama ` onSave() `.
 ![](image/chapter1/p5.1.png)

- Membuka file ** courses.component.html ** dan menambahkan ` event click `.
 ![](image/chapter1/p5.2.png)

- Membuka ** file courses.component.ts **  menambahkan parameter ` $event `.
 ![](image/chapter1/p5.4.png)

- Menammbahkan juga pada ** courses.component.html ** .
```
<div (click) = "onDivClick($event)">
  <button type = "button" class = "btn btn-danger" (click) = "onSave($event)"> Button </button>
</div>
```

- Menjalankan localhost dan inspect element

 ![](image/chapter1/j4soal5.png)

- Membuat method ` onDivClick() ` pada ** courses.component.ts **.
 ![](image/chapter1/p5.7.png)

- Menambahkan div dan event binding pada div elemen
 ![](image/chapter1/p5.8.png)

- Menjalankan localhost dan melakukan inspect elemen.
 ![](image/chapter1/j4soal6.png)

- Untuk mengatasi event bubbling maka menambahkan ` $event.stopPropagation ` pada ** courses.component.ts **.

 ![](image/chapter1/p5.10.png)

- Menjalankan localhost dan melakukan inspect elemen. 
  ![](image/chapter1/j4soal7.png) 

---
#### Praktikum bagian 6

- Membuat inputan pada courses.component.html seperti berikut:
```
<input type = "text" (keyup.enter) = "onKeyUp()">

```
- Menambahkan method `onKeyUp`:

 ![](image/chapter1/p6.png)




- Hasilnya:

 ![](image/chapter1/p6a.png) 

---
#### Praktikum bagian 7
- Menambahkan variabel `#nama` pada courses.component.html :
```
<input type = "text" #nama (keyup.enter) = "onKeyUp(nama.value)">

```

- Menambahkan parameter nama pada method onKeyUp():

![](image/chapter1/p7.png) 
 

---
#### Praktikum bagian 8
- membuat property baru dengan nama ` nama = 'serildawn'; `.
- menambahkan parameter nama di `onKeyUp` 
```
 <input type="text" [value]="nama" (keyup.enter)="nama = $event.target.value;onKeyUp()"> 

```

- Membuka file **app.module.ts** dan menambahkan formmodule seperti berikut:
 ![](image/chapter1/p8.png)

- Membuka **courses.component.html**, lalu memodifikasi codenya seperti berikut:
 ![](image/chapter1/p8a.png)


