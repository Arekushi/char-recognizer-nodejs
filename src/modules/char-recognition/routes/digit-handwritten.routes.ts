import { DigitHandwrittenController } from '../controllers/digit-handwritten.controller';
import { container } from 'tsyringe';
import { Router } from 'express';

import multer from 'multer';


const upload = multer();
const controller = container.resolve(DigitHandwrittenController);
export const digitHandwrittenRouter = Router();

digitHandwrittenRouter.get('/create-model', (req, res) => {
    return controller.createModel(req, res);
});

digitHandwrittenRouter.get('/evaluate', (req, res) => {
    return controller.evaluate(req, res);
});

digitHandwrittenRouter.post('/predict', upload.single('image'), (req, res, next) => {
    return controller.predict(req, res);
});
