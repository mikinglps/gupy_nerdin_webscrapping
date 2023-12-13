import { Router } from "express";
import { refreshVagasController } from "./useCases/RefreshVagas";

const router = Router();

router.get('/refresh', async ( req, res) => {
    return refreshVagasController.handle(req, res)
})

export { router }