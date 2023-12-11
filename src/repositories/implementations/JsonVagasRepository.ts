import { Vagas } from "../../entities/Vagas";
import compare from "../../sortByDate";
import { IVagasRepository } from "../IVagasRepository";
import fs from 'fs'

export class JsonVagasRepository implements IVagasRepository{
    private vagas: Vagas[] = [];

    async sortVagas(vagas: Vagas[]): Promise<Vagas[]> {
        return vagas.sort(compare);
    }

    async refreshVagas(): Promise<Vagas[]> {
        const vagas = await this.sortVagas(this.vagas);
        const jsonContent = JSON.stringify(vagas);
        fs.writeFile("./vagas.json", jsonContent, "utf-8", (err) => {
            if(err){
                console.log('Error!')
            }
            })
            return vagas
    }

    async save(vagas: Vagas): Promise<void>{
        this.vagas.push(vagas);
    }
}