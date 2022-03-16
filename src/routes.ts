import { Router } from 'express';


const routes = (): Router => {
    const router = Router();

    // router.use('/', webhookRouter);
    // router.use('/whatsapp', whatsappRouter);

    return router;
};

export default routes;
