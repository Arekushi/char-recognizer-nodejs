import { container } from 'tsyringe';
import { Router } from 'express';

import { DigitHandwrittenController } from '@recognition/controllers/digit-handwritten.controller';
import { LetterHandwrittenController } from '@recognition/controllers/letter-handwritten.controller';
import { HandwrittenController } from '@recognition/controllers/handwritten.controller';


const routes = (): Router => {
    const router = Router();

    const controllers = [
        container.resolve(HandwrittenController),
        container.resolve(DigitHandwrittenController),
        container.resolve(LetterHandwrittenController)
    ];

    controllers.forEach(c => {
        router.use(c.path, c.setRoutes());
    });

    router.get('/ping', (req, res) => {
        return res.json({
            result: 'pong'
        });
    });

    return router;
};

export default routes;
