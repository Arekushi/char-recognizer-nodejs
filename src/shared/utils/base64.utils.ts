import { randomId } from './string.utils';


export interface ImageBase64 {
    mimetype?: string;
    buffer?: Buffer;
    originalname?: string;
}


export const decodeBase64Image = (dataString: string): ImageBase64 => {
    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (matches.length !== 3) {
        throw new Error('Invalid input string');
    }

    return {
        mimetype: matches[1],
        originalname: `${randomId()}.${matches[1].split('/')[1]}`,
        buffer: Buffer.from(matches[2], 'base64')
    }
}
