import { Vagas } from "../entities/Vagas";

export interface IVagasRepository{
    sortVagas(vagas: Vagas[]): Promise<Vagas[]>
    refreshVagas(): Promise<Vagas[]>
    save(vagas: Vagas): Promise<void>
}