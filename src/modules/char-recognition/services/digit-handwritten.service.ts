import config from 'config';

import { injectable, autoInjectable } from 'tsyringe';
import { HandwrittenService } from './handwritten.service';
import { HttpService } from '@core/services/http.service';


@injectable()
@autoInjectable()
export class DigitHandwrittenService extends HandwrittenService {

    constructor(
        http: HttpService
    ) {
        super(http);
        this.url = `${config.get('flask_api')}/digit-handwritten`;
    }

}
