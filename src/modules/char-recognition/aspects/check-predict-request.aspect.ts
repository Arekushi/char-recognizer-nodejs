import { Request, Response } from 'express';
import { Aspect, AspectContext } from '@arekushii/ts-aspect';
import { decodeBase64Image } from '@utils/base64.utils';


export class CheckPredictRequestAspect implements Aspect {

    execute(ctx: AspectContext): [Request, Response] {
        const req: Request = ctx.functionParams[0];
        const res: Response = ctx.functionParams[1];

        if (req.file || req.body.image) {
            req.body.image = req.file || decodeBase64Image(req.body.image);
            return [req, res];
        }

        throw null;
    }
}
