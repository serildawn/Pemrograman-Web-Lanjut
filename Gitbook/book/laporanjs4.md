# Laporan JS4
---
#### Praktikum bagian 1
- Membuka file ** course.component.ts ** menambahkan code berikut ini :
![](image/chapter1/p1.1.jpg)
- Membuka file ** course.component.html ** tambahkan code berikut ini :
![](image/chapter1/p1.2.jpg)
- Lalu hasilnya :

![](image/chapter1/j4soal1.jpg)
---
#### Praktikum bagian 2
- Membuka file ** courses.component.ts ** tambahkan property colspan dibawah line imageUrl.
![](image/chapter1/p2.1.jpg)
- Membuka file ** courses.component.html ** dan menambahkan berikut ini :
![](image/chapter1/p2.2.jpg)

- Lalu muncul error seperti :
![](image/chapter1/error.jpg)


- Menambahkan attr pada colspan seperti berikut :
![](image/chapter1/p2.4.jpg)

- Setelah di compile maka hasilnya : 
![](image/chapter1/j4soal2.jpg)

- Selanjutnya menambahkan button pada ** courses.component.html ** seperti berikut :
![](image/chapter1/p2.6.jpg)

- Maka hasilnya seperti berikut :
![](image/chapter1/j4soal3.jpg)

---
#### Praktikum bagian 3
- Buka file ** courses.component.ts ** kemudian menambah propery ` isActive = true ` setelah line ` colspan = 2;`.

 ![](image/chapter1/p3.1.jpg)

- Merubah ` isActive ` menjadi false.

 ![](image/chapter1/p3.3.jpg)
---
#### Praktikum bagian 4
- Membuka file ** courses.component.html ** kemudian tambahkan code berikut :
  ![](image/chapter1/p4.1.jpg)

---
#### Praktikum bagian 5
- Membuka file ** course.component.ts ** dan buatlah method dengan nama ` onSave() `.
 ![](image/chapter1/p5.1.jpg)
- Membuka file ** courses.component.html ** dan menambahkan ` event click `.
 ![](image/chapter1/p5.2.jpg)
- Membuka ** file courses.component.ts **  menambahkan parameter ` $event `.
 ![](image/chapter1/p5.4.jpg)
- Menammbahkan juga pada ** courses.component.html ** .
```
<div (click) = "onDivClick($event)">
  <button type = "button" class = "btn btn-danger" (click) = "onSave($event)"> Button </button>
</div>
```

- Menjalankan localhost dan inspect element
 ![](image/chapter1/j4soal5.jpg)
- Membuat method ` onDivClick() ` pada ** courses.component.ts **.
 ![](image/chapter1/p5.7.jpg)

- Menambahkan div dan event binding pada div elemen
 ![](image/chapter1/p5.8.jpg)
- Menjalankan localhost dan melakukan inspect elemen.
 ![](image/chapter1/j4soal6.jpg)

- Untuk mengatasi event bubbling maka menambahkan ` $event.stopPropagation ` pada ** courses.component.ts **.

 ![](image/chapter1/p5.10.jpg)

- Menjalankan localhost dan melakukan inspect elemen. 
  ![](image/chapter1/j4soal7.jpg) 
---
#### Praktikum bagian 6

- Soal 8
 ![](image/chapter1/j4soal8.jpg) 
- Soal 9
 ![](image/chapter1/j4soal9.jpg) 

---
#### Praktikum bagian 7
- Soal 10 
 ![](image/chapter1/j4soal10.jpg) 

---
#### Praktikum bagian 8
- membuat property baru dengan nama ` nama = 'serildawn'; `.
- menambahkan parameter nama di onKeyUp ` <input type="text" [value]="nama" (keyup.enter)="nama = $event.target.value;onKeyUp()"> `.
- Soal 11
  ![](image/chapter1/j4soal11.jpg)
- Soal 12
