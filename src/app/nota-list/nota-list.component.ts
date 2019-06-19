import { Component, OnInit } from '@angular/core';
import { NotaService } from 'src/services/nota.service';
import { EntityResult } from '../../models/entity.model';
import { Nota } from 'src/models/nota.model';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.less']
})
export class NotaListComponent implements OnInit {

  entityResult: EntityResult<Nota>;
  
  constructor(private notaService: NotaService) { }

  ngOnInit() {
    this.load();
  }

  load(): void{
    this.notaService.getAll().subscribe(e => {
      this.entityResult = e
    });
  }

}
