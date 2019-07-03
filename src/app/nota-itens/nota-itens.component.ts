import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route  } from '@angular/router';
import { NotaService } from 'src/services/nota.service';
import { ItemModel } from 'src/models/item.model';

@Component({
  selector: 'app-nota-itens',
  templateUrl: './nota-itens.component.html',
  styleUrls: ['./nota-itens.component.less']
})
export class NotaItensComponent implements OnInit {
  @Input()itens: ItemModel[];
   //@Input() itens2: ItemModel[];


  constructor(private route: ActivatedRoute, private notaService: NotaService) { }

  ngOnInit() {
    //this.load();
  }

  load(): void{
    this.route.params.subscribe(p => {
      this.notaService.getItens(p['id']).subscribe(i =>{
        this.itens = i;
        //this.itens2 = i;  
      });
    });
  }

}
