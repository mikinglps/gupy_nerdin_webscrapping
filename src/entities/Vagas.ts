import { v4 } from "uuid";

export class Vagas {
    public readonly id: string;
    public titulo: string;
    public postagem: string;
    public dataBackend: Date;
    public numVagas: string;
    public local: string;
    public empresa: string;
    public descricao: string;
    public link: string;

    constructor(props: Omit<Vagas, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = v4();
        }
    }
}