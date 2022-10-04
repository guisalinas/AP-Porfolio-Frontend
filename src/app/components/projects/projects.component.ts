import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projectItem:any;
  constructor(private porfolioData: PorfolioService) { }

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      console.log(data);
      this.projectItem = data.projects;
    });
  }
}
