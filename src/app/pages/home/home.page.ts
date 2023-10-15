import { Component, OnInit } from '@angular/core';
import { CataasService } from 'src/app/services/cataas.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public catUrl: string = '';
  public owner: string = '';
  public errorText: string = '';
  public show: number = 0;

  constructor(private cataasService: CataasService, private navCtrl: NavController) { }


  getRandomCat() {
    this.cataasService.getRandomCat().subscribe((catUrl: any) => {
      console.log(catUrl);
      if (catUrl && catUrl.url) {
        this.catUrl = 'https://cataas.com' + catUrl.url;
        this.show=1;
        if (catUrl.owner != 'null' && catUrl.owner != null) {
          this.owner = catUrl.owner;
        } else {
          this.owner = 'nieznany';
        }
      } else {
        this.errorText = 'Błąd pobierania obrazu kota - przepraszamy za utrudnienia';
      }
    },
    (error) => {
      console.error('Błąd pobierania obrazu kota:', error);
      this.errorText = 'Błąd pobierania obrazu kota';
    }
  );
}

navigateToHome() {
  this.navCtrl.navigateForward('',  { animated: false });
}

  ngOnInit() {

  }
}
