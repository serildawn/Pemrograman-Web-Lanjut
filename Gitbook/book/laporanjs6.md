#Laporan JS6
---
####6.1 Membuat Form Bootstrap
- Membuat sebuah component dengan nama contact
- Membuka file contact.component.html dengan menambahkan code :
```
<div class="container">
  <div class="col-md-6">
    <form action="">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" id="nama" class="form-control" >
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea class="form-control" rows="5" id="comment" ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        button
      </button>
    </form>
  </div>
</div>
```
- Menambahkan di **app.component.html**
```
<app-contact></app-contact>
<router-outlet></router-outlet>
```
- Kemudian menjalankan di server

![](image/chapter1/6/1.jpg)

---
####6.2 Macam-Macam Form 
- Generate 2 buah component dengan nama reactive-form dan template-driven
- Membuka file di reactive-form.component dan membuat code berikut:

```
<div class="container">
  <div class="col-md-4">
    <form novalidate>
      <div class="form-group">
        <label for="nama_mahasiswa">Nama Mahasiswa</label>
        <input id="nama_mahasiswa" class="form-control" type="text" aria-placeholder="namamhs" placeholder="nama mahasiswa"/>
      </div>
      <div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input id="nama_jurusan" class="form-control" type="text" placeholder="jurusan" />
        </div>
        <div class="form-group">
          <label for="ProgramStudi">Program Studi</label>
          <input id="nama_program_studi" class="form-control" type="text" placeholder="program studi" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

```
- Membuka file app.component.html dan menambahkan code berikut :
```
<app-reactive-form></app-reactive-form>
<router-outlet></router-outlet>
```
- Sehingga hasilnya:

![](image/chapter1/6/2.jpg)

- Membuat interface dengan nama mahasiswa.interface.html dan mengisi code berikut:
```
export interface mahasiswa {
    nama_mhs:string ;
    pendidikan: {
        nama_jurusan:string;
        nama_prodi:string;
    }
}
```
- Membuka file reactive-form.component.ts import terlebih dahulu FormBuilder dan FormsGroup dan menambahkan code berikut:

```
import {FormGroup, FormBuilder} from '@angular/forms';
import {mahasiswa} from './../mahasiswa.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  mahasiswa:FormGroup;

  constructor(private mhs:FormBuilder)
  {
    this.createForm();
   }

  ngOnInit() {
  }

  //method untuk generate form
  createForm(){
    this.mahasiswa=this.mhs.group({
      nama_mhs:'',
      pendidikan:this.mhs.group({
        nama_jurusan:'',
        nama_prodi:''
      })
    })
  }
  onSubmit(f:FormGroup)
  {
    console.log("hasil dari inputan adalah");
    console.log(f.value);
  }
}

```
- Membuka file reactive-form.component.html dan memodifikasi code didalamnya sebagai berikut  :
```
<div class="container">
  <div class="col-md-4">
    <form novalidate [formGroup]="mahasiswa" (ngSubmit)="onSubmit(mahasiswa)">
      <div class="form-group">
        <label for="nama_mahasiswa">Nama Mahasiswa</label>
        <input id="nama_mahasiswa" class="form-control" type="text" formControlName="nama_mhs" placeholder="nama mahasiswa" aria-describedby="namamhs"/>
      </div>
      <div formGroupName="pendidikan">
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input
           id="nama_jurusan" 
           class="form-control"
            type="text"
             placeholder="jurusan" 
             formControlName="nama_jurusan" />
        </div>
        <div class="form-group">
          <label for="ProgramStudi">Program Studi</label>
          <input id="nama_program_studi" class="form-control" type="text"  formControlName="nama_prodi" placeholder="program studi" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
```
- Menjalankan server local host maka hasilnya :

![](image/chapter1/6/2lanjut.jpg)

- Untuk template-driven membutuhkan FormsModul pada app.module.ts jadi buka app.module.ts dan menambahkan form module
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
```
- Membuka file **template-driven.component.ts** dan menambahkan struktur form seperti berikut:

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hasil inputan:");
    console.log(this.mahasiswa)
  }

  mahasiswa={
    nama_mhs:'',
    pendidikan: {
        nama_jurusan:'',
        nama_prodi:''
  }

}
}

```
- Membuka file **template-driven.component.html** dan menambahkan code berikut :

```
<div class="container">
  <div class="col-md-4">
    <form novalidate (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="nama_mahasiswa">Nama Mahasiswa</label>
        <input
          type="text"
          [(ngModel)]="mahasiswa.nama_mhs" 
          [ngModelOptions]="{standalone:true}"
          class= "form-control"
          id="nama_mahasiswa"
          aria-describedby="namamhs"
          placeholder="nama mahasiswa"
           
           />
      </div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input
          type="text"
          ([(ngModel)]="mahasiswa.pendidikan.nama_jurusan"
          
          [ngModelOptions]="{standalone:true}"
           class="form-control"
           id="nama_jurusan" 
           placeholder="jurusan" 
            />
        </div>
        <div class="form-group">
          <label for="ProgramStudi">Program Studi</label>
          <input
          type="text" 
         
           ([(ngModel)]="mahasiswa.pendidikan.nama_prodi"
           [ngModelOptions]="{standalone:true}"
           class="form-control"
           id="nama_program_studi" 
              placeholder="program studi" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

```
- Menambahkan method onSubmit**template-driven.component.ts**

```
onSubmit(){
  console.log("hasil inputan :");
  console.log(this.mahasiswa);
}

```
- Membuka file **app.component.html** menambahkan code berikut :

```
<!-- <app-contact></app-contact> -->
<!-- <app-reactive-form></app-reactive-form> -->
<app-template-driven></app-template-driven>
<router-outlet></router-outlet>

```
---
####6.3 ngModel 
- Membuka file **contact-form.component.html**

```
<div class="container">
  <div class="col-md-6">
    <form action="">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" id="nama" class="form-control" [[(ngModel)]="nama"] />
      </div>
      <div class="form-group">
        <label for="comment">Comment :</label>
        <textarea class="form-control" rows="5" id="comment" [(ngModel)]="comment" ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        button
      </button>
    </form>
  </div>
</div>

```
- Membuka file **contact-form.componen.ts** dan menambahkan decorator input:

```
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() nama:string;
  @Input() comment:string;


  constructor() { }

  ngOnInit() {
  }

}

```

- Coba jalan servernya dan lihat terdapat pesan error seperti pada gambar berikut :

![](image/chapter1/6/6.3error.jpg)

- Menambahkan atribut name pada tag input:

```
<div class="container">
  <div class="col-md-6">
    <form action="">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" id="nama" class="form-control" [[(ngModel)]="nama" name="nama" />
      </div>
      <div class="form-group">
        <label for="comment">Comment :</label>
        <textarea class="form-control" rows="5" id="comment" [(ngModel)]="comment" name="comment"></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        button
      </button>
      <!-- menampilkan hasil inputan -->
      <p> Hasil Inputan :</p>
      <h1> Nama = {{nama}}</h1>
      <h1>Comment = {{comment}}</h1>
    </form>
  </div>
</div>

```
- Hasil nya:

![](image/chapter1/6/6.3.1.jpg)

- Membuka file **contact.component.html**
- Membuka file **contact.component.ts** modifikasi code berikut ini 
- Menjalankan server dan lihat pada inspect maka akan muncul property dari ngModel 

![](image/chapter1/6/6.3inspect.jpg)

---
####6.4 Validasi
- Membuka file `contact.component.html` dan tambahkan code berikut :

```
<div class="form-group">
        <label for="nama">Nama</label>
        <input 
        type="text"
         id="nama"
          class="form-control"
          required
          ngModel
          #firstName="ngModel"
          (change)="log(firstName)"
          name="nama" 
          />
      <div class="alert alert-danger" *ngIf="!firstName.valid"> Nama harus diisi</div>

```

- Maka hasilnya:

![](image/chapter1/6/6.4.jpg)

- Menambahkan suatu kondisi di `contact.component.html`

```
   <div 
      class="alert alert-danger"
       *ngIf="firstName.touched && !firstName.valid"
       >
        Nama harus diisi
      </div>

```

---
####6.5 Spesific validasi error 
- Membuka file **conctact.component.html** dan tambahkan beberapa code berikut 
```
 <div *ngIf = "firstName.errors['required']">Nama harus diisi</div>
        <div *ngIf = "firstName.errors['minlength']">nama min 3 kata</div>
        <div *ngIf = "firstName.errors['pattern']">
          nama tidak sesuai dengan pattern</div>
        </div>
```

- Maka hasilnya:

![](image/chapter1/6/6.5.jpg)

---
####6.6 styling Invalid input field 
- Membuka file contact.component.css dan tambahkan code berikut
```
.form-control.ng-touched.ng-invalid{
    border: 4px solid red;
}
```

- Maka hasilnya:

![](image/chapter1/6/6.6.jpg)

---
####6.7 ngFor
- buka file contact.component.ts dan tambahkan sebuah method submit seperti  berikut:

```
log(z) {
      console.log(z);
    }

    submit(form) {
      console.log(form);
      form.valid;
    
```

- Membuka file contact.component.html dan buatlah sebuah template variabel ngForm atau property ngForm dengan nama form (#form) yang nanti digunakan sebagai parameter dari method submit seperti berikut :

```
<div class="container">
  <div class="col-md-6">
    <form #form="ngForm" (ngSubmit)="submit(form)">
      <div class="form-group">
          <label for = "nama" id = "nama">Nama</label>
          <input
          type = "text"
          id = "nama"
          class = "form-control"
          required
          minlength="3"
          maxlength="10"
          pattern="pisang"
          ngModel
          #firstName = "ngModel"
          (change)="log(firstName)"
          name = "nama"
          />

```

- pada button

```
 <button type="submit" class="btn btn-primary">
        button
      </button>
```
---
####6.8 ngModelGroup 
- buka file contact.component.html dan tambahkan code 
```
 <div ngModelGroup="contact" #contact="ngModelGroup"></div>
        <div *ngIf="contact.value">contoh validasi pada ngModelGroup</div>
```

---
####6.9 Disabling the submit button 
- buka file contact.component.html dan tambahkan code berikut pada tag button :

```
<button type="submit" [disabled]="!form.valid" class ="btn btn-primary">

```
- Maka hasilnya:

![](image/chapter1/6/6.9.jpg)

---
####6.10 Bekerja dengan check box
- Membuka file **contact.component.html** dan tambahkan code check box
- hasil:

![](image/chapter1/6/6.10.jpg)

---
####6.11 Bekerja dengan drop-down list 
- Membuka file contact.component.html tambahkan code untuk dropdown list 

```
  <div class = "form-group">
          <label for = "contactMethod">Contact Method</label>
          <select ngModel name = "contactMethod" id = "contactMethod" class = "form-control">
            <option *ngFor = "let method of contactMethods" [value]="method.id">{{method.name}}</option>
          </select>
        </div>

```

- Membuka file **contact.component.ts** dan tambahkan code:

```
contactMethods=[
    {id:1, name:'email'},
    {id:2, name:'phone'}
  ]

```
- Hasilnya:

![](image/chapter1/6/6.11.jpg)

-  Selain itu kita juga dapat menampilkan property id dan property nama dengan menggunakan property ngValue seperti berikut :

```
<select ngModel name = "contactMethod" id = "contactMethod" class = "form-control">
            <option *ngFor = "let method of contactMethods" [ngValue]="method">{{method.name}}</option>
            
```
- Selain itu juga kita dapat menggunakan multiple jika ingin memilih keduanya seperti berikut:

```
<select multiple ngModel name = "contactMethod" id = "contactMethod" class = "form-control">
            <option *ngFor = "let method of contactMethods" [ngValue]="method">{{method.name}}</option>

```
---
####6.12 Bekerja dengan radio button 
- Membuka file contact.component.html dan tambahkan code beriku:

```
<!-- radio button -->
      <div class="radio">
          <label for = "">
            <input ngModel type = "radio" name = "contactMethodRadio" [value] = "1">
            Email
          </label>
        </div>
        <div class="radio">
        <label for = "">
            <input ngModel type = "radio" name = "contactMethodRadio" [value] = "2">
            Phone
          </label>
        </div>
        
```
- Menggunakan directive ngFor untuk menampilkan value 

```
<div *ngFor = "let method of contactMethods" class="radio">
          <label for = "">
            <input ngModel type = "radio" name = "contactMethodRadio" [value] = "method.id">
            {{method.name}}
          </label>
        </div>
```

- Maka hasilnya

![](image/chapter1/6/6.12.jpg)











