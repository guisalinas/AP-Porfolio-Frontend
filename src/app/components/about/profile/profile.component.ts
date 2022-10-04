import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myPortfolio:any;
  constructor(private porfolioData: PorfolioService) { }

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      console.log(data);
      this.myPortfolio = data;
    });
  }

}
