import multer from 'multer';

import { Methods } from '@core/enum/http-methods.enum';
import { IRoute } from '@core/interfaces/iroute.interface';
import { HandwrittenController } from '@recognition/controllers/handwritten.controller';


const upload = multer();

export const routes = (controller: HandwrittenController): IRoute[] => {
    return [
        {
            path: '/create-model',
            method: Methods.GET,
            handler: controller.createModel,
            localMiddleware: [],
        },
        {
            path: '/evaluate',
            method: Methods.GET,
            handler: controller.evaluate,
            localMiddleware: [],
        },
        {
            path: '/predict',
            method: Methods.POST,
            handler: controller.predict,
            localMiddleware: [upload.single('image')],
        }
    ];
};
