import { Vagas } from "../../entities/Vagas";
import { IVagasRepository } from "../../repositories/IVagasRepository";
import { IRefreshVagasDTO } from "./RefreshVagasDTO";

export class RefreshVagasUseCase {
    constructor(
        private vagasRepository: IVagasRepository
    ){    
    }

    async execute(isItDone?: Boolean, data?: IRefreshVagasDTO){
        if(isItDone){
           return await this.vagasRepository.refreshVagas()
        }else{
            const vaga = new Vagas(data)
            await this.vagasRepository.save(vaga);
        }
    }
}