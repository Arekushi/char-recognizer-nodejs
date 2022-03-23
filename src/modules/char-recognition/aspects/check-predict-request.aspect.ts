import { HandwrittenController } from './../controllers/handwritten.controller';
import { decodeBase64Image } from '@src/shared/utils/base64.utils';
import { Request, Response } from 'express';
import { Aspect } from '@arekushii/ts-aspect';


export class CheckPredictRequestAspect implements Aspect {
    execute(controller: HandwrittenController, args: any[]): any {
        const req: Request = args[0];
        const res: Response = args[1];

        if (req.file || req.body.image) {
            req.body.image = req.file || decodeBase64Image(req.body.image);
            return [req, res];
        }

        throw null;
    }
}
