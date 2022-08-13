import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private porfolioData: PorfolioService ) { }

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      console.log(data);
    });
  }

}
