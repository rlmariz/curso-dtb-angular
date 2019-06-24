import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/models/nota.model';
import { NotaService } from 'src/services/nota.service';
import { EntityResult } from 'src/models/entity.model';

@Component({
  selector: 'app-nota-nova',
  templateUrl: './nota-nova.component.html',
  styleUrls: ['./nota-nova.component.less']
})
export class NotaNovaComponent implements OnInit {

  nota: Nota = new Nota();

  constructor(private notaSercvice: NotaService) { }

  ngOnInit() {
  }

  salvar(): void{
    this.notaSercvice.salve(this.nota).subscribe((e: Nota)=>{
      window.alert("Nota Salva com Sucesso!!!!");
    }
    )  
  }

}
