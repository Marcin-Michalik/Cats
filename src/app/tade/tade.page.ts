import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tade',
  templateUrl: './tade.page.html',
  styleUrls: ['./tade.page.scss'],
})
export class TadePage implements OnInit {

  image: any;
  constructor(private http: HttpClient, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateForward('',  { animated: true });
  }

 // getKittens(){
  //  this.image = 'https://cataas.com/cat';
  //}

  getKittens(){
    const apiUrl = 'https://cataas.com/cat?json=true';
    this.http.get(apiUrl).subscribe((image: any)=>{
      console.log(image);
      this.image = 'https://cataas.com'+image.url;
    });
  }

}
