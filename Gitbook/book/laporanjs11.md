# Laporan JS11
---

#### Praktikum – Bagian 1: Implementation Login
- Buka folder auth-demo-starter kemudian open terminal dan lakukan ng serve. Catat hasil nya (soal 1)

![](image/chapter1/11/soal1.png)

- Apabila terjadi error seperti dibawah ini :

![](image/chapter1/11/soal1.png)

Maka lakukan perintah untuk menginstall angular2-jwt, dengan perintah :
`npm install angular2-jwt –save`  kemudian lakukan  **ng serve –open** 

![](image/chapter1/11/p1.2.png)

catat hasilnya (soal 2)

![](image/chapter1/11/soal2.png)

- Buka file auth.service.ts lalu tambahkan perintah seperti berikut ini :

![](image/chapter1/11/p1.4.png)

- Jika sudah ditambahkan, jalankan perintah ng serve, dan klik bagian login lalu masukkan email address : mosh@domai.com dan password 1234 kemudian klik sign in. perhatikan apa yang terjadi? Catat hasilnya (soal 3)

![](image/chapter1/11/soal3.png)

- Kemudian lakukan login dengan email yang formatnya tidak valid contoh email kita isi 1234 dengan password 1234 maka ketika kita login dan kita inspect response apa yang muncul ?
Catat hasilnya (soal 4)

![](image/chapter1/11/soal4.png)

- Buka file auth.service.ts kemudian lakukan perubahan seperti berikut :

```
login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        let result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

```

- Kemudian jalankan dan lakukan login dengan username dan password yang sesuai pada no 5, kemudian lakukan inspect pilih menu application liat di local storage, apa yang terlihat ? catat hasilnya (soal 5)

![](image/chapter1/11/soal5.png)
![](image/chapter1/11/soal5a.png)

---

#### Praktikum – Bagian 2: Implemetasi Logout
- Open file home.component.html, tambahkan  
```
<li><a (click)="authService.logout()">Logout</a></li>
```

- Open file auth.service.ts lalu tambahkan pada bagian logout :
```
 logout() { 
    localStorage.removeItem('token');
  }
  ```

- Jalankan aplikasi, lalukan login dengan username dan password seperti sebelumnya dan lakukan inspect, cek pada local storage harusnya token nya sudah ada di local storage. Kemudian lakukan logout. Apa yang terjadi pada local storage ?
Catat hasil (soal 6)

![](image/chapter1/11/soal6.png)


---

#### Praktikum – Bagian 3: Getting the Current User
- Buka **https://jwt.io**, kita akan membuat token yang nantinya akan kita tempelkan di fake-backed.ts

![](image/chapter1/11/p3.1.png)
![](image/chapter1/11/p3.1a.png)

- Open auth.service.ts, lakukan modifikasi pada part isLoggeedIn() sehingga menjadi seperti berikut :

```
isLoggedIn() { 
    return tokenNotExpired();
  }

```

- Kemudian tambahkan code berikut tepat dibawah langkah no 2 :

```
get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }

```

- Open fake-backend.ts, ganti token yang lama menjadi token pada no 1

```
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtYWRlbmkiLCJpYXQiOjE1MTYyMzkwMjJ9.Plbz12BfDq-dou4pugVG-EeH9AfSIAeEVdtXHv8IhXg';

```
- Open file home.component.html , modifikasi seperti berikut :

```
<h1>Home Page</h1>
<p *ngIf = "authService.isLoggedIn()">
  Welcome {{ authService.currentUser.name }}
</p>
<ul>
  <li *ngIf = "authService.isLoggedIn() && authService.currentUser.admin">
      <a routerLink="/admin">Admin</a></li>
  <li *ngIf = "!authService.isLoggedIn()"><a routerLink="/login">Login</a></li>
  <li *ngIf = "authService.isLoggedIn()"><a (click) = "authService.logout()">Logout</a></li>
</ul>

```
- Jalankan aplikasi. Cek apa yang terjadi dan beri penjelasan (soal 7)

![](image/chapter1/11/soal7.png)


