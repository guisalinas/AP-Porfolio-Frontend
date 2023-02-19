import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationItem:any;
  constructor(private porfolioData: PorfolioService) { }

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
       this.educationItem = data.education;
    });
  }
}
