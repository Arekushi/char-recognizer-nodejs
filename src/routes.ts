import { digitHandwrittenRouter } from './modules/char-recognition/routes/digit-handwritten.routes';
import { letterHandwrittenRouter } from './modules/char-recognition/routes/letter-handwritten.routes';
import { Router } from 'express';


const routes = (): Router => {
    const router = Router();

    router.use('/digit', digitHandwrittenRouter);
    router.use('/letter', letterHandwrittenRouter);

    router.get('/ping', (req, res) => {
        return res.json({
            result: 'pong'
        });
    });

    return router;
};

export default routes;
