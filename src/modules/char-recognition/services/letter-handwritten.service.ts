import { injectable } from 'tsyringe';
import { HandwrittenService } from './handwritten.service';
import config from 'config';


@injectable()
export class LetterHandwrittenService extends HandwrittenService {

    constructor() {
        super(`${config.get('flask_api')}/letter-handwritten`)
    }

}
