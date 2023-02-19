import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { person } from 'src/assets/data/model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: person = new person("","","","","","");
  
  constructor( public model_service: ModelService) { }

  ngOnInit(): void {
    this.model_service.getPerson().subscribe(data=>{
      this.person = data;
    });
  }

}
