import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToHome() {
    this.navCtrl.navigateForward('home',  { animated: false });
  }
  navigateToTade(){
    this.navCtrl.navigateForward('tade',  { animated: true });
  }
  ngOnInit() {
  }

}
