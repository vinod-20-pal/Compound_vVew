import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from '../services/compound.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  id: any;
  data: any;
  object: any;
  constructor(private router: ActivatedRoute,
    private compound: CompoundService) {

  }
  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.compound.getAllCompound('allCompound').subscribe((response) => {
      console.log(response);
      this.object = response.filter(ele => ele.id==this.id)[0];
      console.log(this.object);
    })
  }
  
}
