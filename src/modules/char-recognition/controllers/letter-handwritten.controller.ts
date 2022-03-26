import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenController } from '@recognition/controllers/handwritten.controller';
import { LetterHandwrittenService } from '@recognition/services/letter-handwritten.service';


@injectable()
@autoInjectable()
export class LetterHandwrittenController extends HandwrittenController {

    constructor(
        service: LetterHandwrittenService
    ) {
        super(service);
        this.path = '/letter';
    }
}
