#Laporan JS9
---

#### Praktikum – Bagian 1: JSONPlaceHolder
- Mengunjungi alamat berikut : http://jsonplaceholder.typicode.com/
- Maka hasilnya:

![](image/chapter1/9/p1.png) 

---

#### Praktikum - Bagian 2 : Getting Data
- Membuat component baru dengan nama posts dengan perintah `ng g c posts`

![](image/chapter1/9/p2.1.png) 

- Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada **app.module.ts.**

![](image/chapter1/9/p2.2.png) 

*Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih dahulu dengan perintah* `npm i @angular/http`

![](image/chapter1/9/p2.2.2.png)

- Memodifikasi file **posts.component.ts** menjadi seperti berikut:

![](image/chapter1/9/p2.3.png)

- Mengubah file **app.component.html** seperti berikut :

```
<app-posts></app-posts>

```
- Soal 1

![](image/chapter1/9/soal1.png) 

- Jika lupa melakukan import HttpModule pada langkah ke-2 ? sebagai berikut:

![](image/chapter1/9/p2.6.png)

- Soal 2

![](image/chapter1/9/soal2.png)

- Melengkapi kode program pada posts.component.ts menjadi :

![](image/chapter1/9/p2.8.png)

- Soal 3

![](image/chapter1/9/soal3.png)

- Jika kode pada **posts.component.ts** diubah menjadi : (soal 4)

```
constructor(http: Http){
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
        console.log(response.json());
    });
}
```
maka hasilnya:

![](image/chapter1/9/soal4.png)

- Untuk menampilkan data pada halaman browser, ubah kode program pada posts.component.html seperti berikut :

![](image/chapter1/9/p3.2.png)

- Mengubah kode program pada **posts.component.ts** :

```
import { Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts= response.json();
    });
  
   }
}

```

- Soal 5

![](image/chapter1/9/soal5.png)

---

#### Praktikum-Bagian 3 : Creating Data
- Menambahkan input elemen pada **posts.component.html** :

```
<input
  (keyup.enter)="createPost(title)" #title
  type="text" class="form-control">

<ul class="list-group">
  <li 
    *ngFor="let post of posts"
    class="list-group-item">
    {{ post.title }}
  </li>
</ul>

```
- Memodifikasi kode program pada **posts.component.ts** 

```
import { Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      this.posts= response.json();
    });
  
   }

   createPost(input:HTMLInputElement){
     let post= {title: input.value};
     input.value = '';

     this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0, post);
      });
   }

```

- Soal6

![](image/chapter1/9/soal6.png)

---

#### Praktikum - Bagian 4 : Updating Data
- Menambahkan button Update dengan memodifikasi kode program seperti di bawah ini :


![](image/chapter1/9/p4.2.png)

- Menambahkan fungsi updatePost pada **posts.ts** seperti di bawah :

```
updatePost(post){
     this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
     //this.http.put(this.url, JSON.stringify(post));
     .subscribe(response => {
       console.log(response.json());
     })
   }

```

- Soal 7

![](image/chapter1/9/soal7.png)

---

#### Praktikum - Bagian 5 : Deleting Data
- Menambahkan button Delete dengan modifikasi kode program seperti di bawah ini :

 ![](image/chapter1/9/p5.2.png)

- Menambahkan fungsi deletePost pada **posts.ts** seperti di bawah :

```

   deletePost(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });

```

- Soal 8

![](image/chapter1/9/soal8.png)
 


