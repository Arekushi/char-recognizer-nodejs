import { Request, Response } from 'express';
import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenController } from './handwritten.controller';
import { LetterHandwrittenService } from '../services/letter-handwritten.service';


@injectable()
@autoInjectable()
export class LetterHandwrittenController extends HandwrittenController {

    constructor(
        service: LetterHandwrittenService
    ) {
        super(service);
    }
}
