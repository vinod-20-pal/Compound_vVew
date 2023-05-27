import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../services/compound.service';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {
  title = 'medicalStoreWeb';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15,20];
  compound: any;
  constructor(private compoundService: CompoundService) {}

  ngOnInit():void {
    this.getAllCompound();
  }

  getAllCompound() {
    this.compoundService.getAllCompound('allCompound').subscribe((response) => {
      this.compound = response;
    })
  }

  onTableDataChange(event: any): void {
    this.page  = event;
    this.getAllCompound();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllCompound();
  }
}
