import { JsonVagasRepository } from "../../repositories/implementations/JsonVagasRepository";
import { RefreshVagasController } from "./RefreshVagasController";
import { RefreshVagasUseCase } from "./RefreshVagasUseCase";

const jsonVagasRepository = new JsonVagasRepository();
const refreshVagasUseCase = new RefreshVagasUseCase(
    jsonVagasRepository
);

const refreshVagasController = new RefreshVagasController(
    refreshVagasUseCase
)

export { refreshVagasController, refreshVagasUseCase }