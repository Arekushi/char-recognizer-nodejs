import swaggerJsDoc from 'swagger-jsdoc';
import config from 'config';


const options = (): swaggerJsDoc.Options => {
    return {
        definition: {
            openapi: '3.0.0',
            info: {
                title: config.get('app-name'),
                description: 'API that communicates with the API in Flask for handwritten character recognition.',
                version: '1.0.0'
            },
            servers: [
                {
                    url: 'http://localhost:8888'
                }
            ]
        },
        apis: [
            './routes/*.ts'
        ]
    };
};

export const specs = swaggerJsDoc(options());
