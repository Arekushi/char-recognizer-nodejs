import config from 'config';

import { autoInjectable, injectable } from 'tsyringe';
import { HandwrittenService } from './handwritten.service';
import { HttpService } from '@core/services/http.service';


@injectable()
@autoInjectable()
export class LetterHandwrittenService extends HandwrittenService {

    constructor(
        http: HttpService
    ) {
        super(http);
        this.url = `${config.get('flask_api')}/letter-handwritten`;
    }

}
