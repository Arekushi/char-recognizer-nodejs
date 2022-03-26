import base64ToImage from 'base64-to-image';

import { randomId } from './string.utils';
import { ImageBase64 } from '@shared/interfaces/image-base64.interface';


export const decodeBase64Image = (base64: string): ImageBase64 => {
    const parts = base64.split(';');
    const mimetype = parts[0].split(':')[1];
    const imagedata = parts[1].split(',')[1];
    const buffer = Buffer.from(imagedata, 'base64');

    return {
        mimetype,
        buffer,
        imagedata,
        originalname: `${randomId()}.${mimetype.split('/')[1]}`,
    };
};

export const saveBase64 = (base64: string) => {
    return base64ToImage(base64, 'src/assets/images/predict/', { type: 'png' });
};
