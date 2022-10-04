import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myPortfolio:any;

  constructor( private porfolioData: PorfolioService ) { }

  //Acá uso el service
  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      console.log(data);
      this.myPortfolio = data;
    });
  }

}
