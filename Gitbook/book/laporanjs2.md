#Laporan JS2
---
####Praktikum bagian 1
- Cara mengistal typescript dengan perintah berikut ` npm install -g typescript `.
- Kemudian	cek	version	dari typescript	yang terinstall	 ` tsc --version `.
![](image/chapter1/soal1.jpg)
- Membuat direktori	baru dengan	nama ts-hello menggunakan perintah: ` mkdir ts-hello `.
![](image/chapter1/soal2.jpg)
- Membuat file	baru dengan	nama ** main.ts ** dan mengetikkan code dibawah ini:

```
function log(message) {
    console.log(message);
}

let message = 'Hello World';
log(message);

```
- Kemudian ketik perintah ` tsc main.ts ` untuk melakukan proses transpile file typescript kedalam javascript. 
- Mengecek apakah sudah	terbuat	file main.js, dengan melakukan	perintah ` ls `.
![](image/chapter1/ls.jpg)	
- Membuka file	javascript,	memperhatikan apakah sama	isi	dari file	` main.ts `	dan	` main.js `	?
![](image/chapter1/soal4.jpg)
- Melakukan	execute	pada file	main.js	dengan	perintah ` node main.js ` .
![](image/chapter1/soal5.jpg)
	


---


####Praktikum bagian 2
- Membuka file	` main.ts `	, kemudian	menuliskan	code seperti berikut:
```
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
```
- Meremove file	` main.js`	hasil praktikum	bagian	1 menggunakan perintah ` rm	main.js `.
![](image/chapter1/soal6.jpg)
- Melakukan	transpile file ` main.ts ` menggunakan perintah ` tsc main.ts `.
![](image/chapter1/soal7.jpg)
- Meng execute	file javascript	yang sudah terbuat ` node main.js `.
![](image/chapter1/soal8.jpg)

---
####Praktikum bagian 3
- Membuka file ` main.ts ` kemudian	menuliskan listing program	berikut	:

`
let count = 5;
count = 'a';
`
- Melakukan	proses transpile file ` main.ts `	dengan	perintah	` tsc	main.ts `.
- Hasil dari pembenaran di file ` main.js `.	
![](image/chapter1/soal9.jpg)	
	

---
####Praktikum bagian 4
- Membuka file	main.ts, kemudian mengetikkan code	berikut	ini	:
```
let pesan;
pesan = 'abc';
let percobaan = (<string>pesan).endsWith('c');
let alternative = (pesan as string).endsWith('c');
```
- Kemudian	membuat	file main.js	(jangan	lupa untuk	meremove file	main.js	sebelumnya)	kemudian execute menggunakan perintah ` node main.js `.
![](image/chapter1/soal10.jpg)

---
####Praktikum bagian 5
- Membuka file	main.ts, kemudian mengetikkan code	berikut	ini	:

```
let log = function pesan() {
    console.log(pesan);
}

let doLog = (pesan) => {
    console.log(pesan);
}

let doLog1 = (pesan) => console.log(pesan);

```
- Kemudian	membuat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian meng execute seperti praktikum	sebelumnya.
![](image/chapter1/soal11.jpg)

---
####Praktikum bagian 6
- Membuka	file	main.ts,	kemudian	mengetikkan	code berikut ini:

```
interface Point {
    x:number;
    y:number;
}

let drawPoint = (point:Point) => {

}

drawPoint ({
    x:1;
    y:3;
})
```
- Kemudian	membuat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian meng execute seperti praktikum	sebelumnya.
![](image/chapter1/soal12.jpg)


---
####Praktikum bagian 7
- Membuka	file	main.ts,	kemudian	mengetikkan	code berikut ini:

```
class Pointku {
    a:number;
    b:number;

draw() {

}

getDistance(another:Pointku) {

    }
}
```
- Kemudian	membuat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian meng execute seperti praktikum	sebelumnya.
![](image/chapter1/soal13.jpg)


---
####Praktikum bagian 8
- Membuka	file	main.ts,	kemudian	mengetikkan	code berikut ini:

```
class Pointku {
    a:number;
    b:number;

draw() {

}

getDistance(another:Pointku) {

    }
}
```
- Kemudian	membuat	file ` main.js ` (jangan lupa untuk	meremove file ` main.js` sebelumnya)	kemudian meng execute seperti praktikum	sebelumnya.
![](image/chapter1/soal14.jpg)

