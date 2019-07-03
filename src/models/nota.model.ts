import { ItemModel } from './item.model';

export class Nota{
    id: number;
    numero: string;
    emissor: string;
    emissorId: number;
    observacoes: string;
    valorTotal: number;
    dataEmissao: Date;
    itens: ItemModel[];
}