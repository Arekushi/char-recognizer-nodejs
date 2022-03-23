import { Request, Response } from 'express';
import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenController } from './handwritten.controller';
import { DigitHandwrittenService } from './../services/digit-handwritten.service';


@injectable()
@autoInjectable()
export class DigitHandwrittenController extends HandwrittenController {

    constructor(
        service: DigitHandwrittenService
    ) {
        super(service);
    }
}
