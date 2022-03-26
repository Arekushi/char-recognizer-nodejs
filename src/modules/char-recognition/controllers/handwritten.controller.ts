import { NextFunction, Request, Response } from 'express';
import { Advice, UseAspect } from '@arekushii/ts-aspect';
import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenService } from '@recognition/services/handwritten.service';

import { CheckPredictRequestAspect } from '@recognition/aspects/check-predict-request.aspect';
import { Controller } from '@core/controllers/base.controller';
import { routes } from '../routes/handwritten.routes';


@injectable()
@autoInjectable()
export class HandwrittenController extends Controller {

    path: string;
    routes = [];

    constructor(
        public service: HandwrittenService
    ) {
        super();
        this.service = service;
        this.path = '/handwritten';
        this.routes = routes(this);
    }

    async createModel(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const result = await this.service.createModel();
        return res.json(result);
    }

    async evaluate(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const result = await this.service.evaluate();
            return res.json(result);
        } catch (e) {
            return res.json({
                error: e
            });
        }
    }

    @UseAspect(Advice.Before, CheckPredictRequestAspect)
    async predict(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const result = await this.service.predict(req.body.image);
        return res.json(result);
    }
}
