import listEndpoints from 'express-list-endpoints';
import consola from 'consola';
import toBoolean from 'to-boolean';
import config from 'config';

import { App } from './app';
import { container } from 'tsyringe';
import { createTunnel } from './localtunnel';
import { Express } from 'express';


const run = (): void => {
    const port = process.env.PORT || config.get('port');
    const app = container.resolve(App);

    app.server.listen(port, () => {
        consola.success(
            `Node Express server listening on http://localhost:${port}`
        );
    });

    if (toBoolean(process.env.LIST_ENDPOINTS || 'FALSE')) {
        console.log(listEndpoints(app.app as Express));
    }

    if (toBoolean(process.env.TUNNELS || 'FALSE')) {
        createTunnel();
    }
};

export default run;
