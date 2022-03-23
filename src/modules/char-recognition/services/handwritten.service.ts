import axios from 'axios';
import FormData from 'form-data';
import { inject, injectable, delay } from 'tsyringe';


@injectable()
export class HandwrittenService {

    url: string;

    constructor(url: string) {
        this.url = url;
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

    async predict(image: Express.Multer.File): Promise<any> {
        const form = new FormData();
        form.append('image', image.buffer, image.originalname);

        const request_config = {
            headers: {
                ...form.getHeaders()
            }
        };

        return axios.post(`${this.url}/predict`, form, request_config)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e);
            });
    }
}