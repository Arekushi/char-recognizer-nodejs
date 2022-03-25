import sharp from 'sharp';


export const resizeImage = async (buffer: Buffer, width: number, height: number): Promise<Buffer> => {
    return await sharp(buffer)
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .resize(width, height)
        .jpeg({ mozjpeg: true })
        .toBuffer();
}
