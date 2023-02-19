import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { person } from 'src/assets/data/model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  person: person = new person("","","","","","");
  
  constructor( public model_service: ModelService) { }

  ngOnInit(): void {
    this.model_service.getPerson().subscribe(data=>{
      this.person = data;
    });
  }
}
