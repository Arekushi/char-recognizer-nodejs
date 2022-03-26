import config from 'config';

import { resizeImage } from '@utils/image.utils';
import { ImageBase64 } from '@shared/interfaces/image-base64.interface';
import { autoInjectable, injectable } from 'tsyringe';
import { Service } from '@core/services/base.service';
import { HttpService } from '@core/services/http.service';
import { formData } from '@src/shared/utils/form.utils';


@injectable()
@autoInjectable()
export class HandwrittenService extends Service {

    url: string;
    #height: number;
    #width: number;

    constructor(
        http: HttpService
    ) {
        super(http, `${config.get('flask_api')}/handwritten`);
        this.#height = Number(config.get('image.height'));
        this.#width = Number(config.get('image.width'));
    }

    async createModel(): Promise<any> {
        return this.get<any>('/create-model');
    }

    async evaluate(): Promise<any> {
        return this.get<any>('/evaluate');
    }

    async predict(image: Express.Multer.File | ImageBase64): Promise<any> {
        const buffer = await resizeImage(image.buffer, this.#width, this.#height);

        const form = formData([
            ['image', buffer, image.originalname],
        ]);

        return this.post<any>('/predict', form, {
            headers: {
                ...form.getHeaders()
            }
        });
    }
}
