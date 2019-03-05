import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  CourseService(): any[]{
    throw new Error("Method not implemented");
  }

  constructor() { }

  getHobi(){
    return [
      {id:1, hobby: "Berlari", ket: "Lari 1 jam tiap hari"},
        {id:2, hobby: "Senam", ket: "Senam tiap sore"},
        {id:3, hobby: "Bermain Musik", ket: "Bermain musik saat waktu senggang"}
    ]
  }
}

