import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenController } from '@recognition/controllers/handwritten.controller';
import { DigitHandwrittenService } from '@recognition/services/digit-handwritten.service';


@injectable()
@autoInjectable()
export class DigitHandwrittenController extends HandwrittenController {

    constructor(
        service: DigitHandwrittenService
    ) {
        super(service);
        this.path = '/digit';
    }
}
