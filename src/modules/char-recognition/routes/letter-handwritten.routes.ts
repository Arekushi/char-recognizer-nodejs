import { LetterHandwrittenController } from './../controllers/letter-handwritten.controller';
import { container } from 'tsyringe';
import { Router } from 'express';

import multer from 'multer';


const upload = multer();
const controller = container.resolve(LetterHandwrittenController);
export const letterHandwrittenRouter = Router();

letterHandwrittenRouter.get('/create-model', (req, res) => {
    return controller.createModel(req, res);
});

letterHandwrittenRouter.get('/evaluate', (req, res) => {
    return controller.evaluate(req, res);
});

letterHandwrittenRouter.post('/predict', upload.single('image'), (req, res, next) => {
    return controller.predict(req, res);
});
