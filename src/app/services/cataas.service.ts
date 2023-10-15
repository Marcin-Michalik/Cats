import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CataasService {

  private apiURL = 'https://cataas.com/';

  constructor(private http: HttpClient) {}

  
  getRandomCat() {
    const url = this.apiURL + 'cat?json=true';
    return this.http.get(url);
  }

}



