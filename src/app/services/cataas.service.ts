import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CataasService {
  private apiURL = 'https://api.waifu.pics/sfw/hug';

  constructor(private http: HttpClient) {}

  getRandomCat() {
    return this.http.get(this.apiURL);
  }
}
