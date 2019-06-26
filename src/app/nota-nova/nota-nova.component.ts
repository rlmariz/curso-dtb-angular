import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/models/nota.model';
import { NotaService } from 'src/services/nota.service';
import { EntityResult } from 'src/models/entity.model';
import { EmissorModel } from 'src/models/emissor.model';
import { EmissorService } from 'src/services/emissor.service';

@Component({
  selector: 'app-nota-nova',
  templateUrl: './nota-nova.component.html',
  styleUrls: ['./nota-nova.component.less']
})
export class NotaNovaComponent implements OnInit {

  nota: Nota = new Nota();
  emissor: EmissorModel = new EmissorModel()

  constructor(private notaSercvice: NotaService, private emissorSercvice: EmissorService) { }

  ngOnInit() {
  }

  salvar(): void{
    this.notaSercvice.salve(this.nota).subscribe((e: Nota)=>{
      window.alert("Nota Salva com Sucesso!!!!");
    }
    )  
  }

  obterEmissor(): void{
     this.emissorSercvice.get(this.emissor.cnpj).subscribe((e: EmissorModel) => {
       this.emissor = e;
     }, () => {this.emissor = new EmissorModel();});
  }

}
