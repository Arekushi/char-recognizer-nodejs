import axios from 'axios';
import FormData from 'form-data';
import config from 'config';

import { resizeImage } from './../../../shared/utils/image.utils';
import { ImageBase64 } from './../../../shared/interfaces/image-base64.interface';
import { injectable } from 'tsyringe';


@injectable()
export class HandwrittenService {

    url: string;
    #height: number;
    #width: number;

    constructor(url: string) {
        this.url = url;
        this.#height = Number(config.get('image.height'));
        this.#width = Number(config.get('image.width'))
    }

    async createModel(): Promise<any> {
        return axios.get(`${this.url}/create-model`)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e);
            });
    }

    async evaluate(): Promise<any> {
        return axios.get(`${this.url}/evaluate`)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e);
            });
    }

    async predict(image: Express.Multer.File | ImageBase64): Promise<any> {
        const form = new FormData();
        const buffer = await resizeImage(image.buffer, this.#width, this.#height);

        form.append('image', buffer, image.originalname);

        const requestConfig = {
            headers: {
                ...form.getHeaders()
            }
        };

        return axios.post(`${this.url}/predict`, form, requestConfig)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
