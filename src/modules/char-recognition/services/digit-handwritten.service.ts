import { injectable } from 'tsyringe';
import { HandwrittenService } from './handwritten.service';
import config from 'config';


@injectable()
export class DigitHandwrittenService extends HandwrittenService {

    constructor() {
        super(`${config.get('flask_api')}/digit-handwritten`)
    }

}
