import { Request, Response } from 'express';
import { HandwrittenService } from './../services/handwritten.service';
import { injectable, autoInjectable } from 'tsyringe';
import { Advice, UseAspect } from '@arekushii/ts-aspect';
import { CheckPredictRequestAspect } from '../aspects/check-predict-request.aspect';


@injectable()
@autoInjectable()
export class HandwrittenController {

    constructor(
        private service: HandwrittenService
    ) { }

    async createModel(req: Request, res: Response): Promise<Response> {
        const result = await this.service.createModel();
        return res.json(result);
    }

    async evaluate(req: Request, res: Response): Promise<Response> {
        const result = await this.service.evaluate();
        return res.json(result);
    }

    // @UseAspect(Advice.Before, CheckPredictRequestAspect)
    async predict(req: Request, res: Response): Promise<Response> {
        const result = await this.service.predict(req.file);
        return res.json(result);
    }
}
