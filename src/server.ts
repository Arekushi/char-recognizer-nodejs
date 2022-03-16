import consola from 'consola';
import toBoolean from 'to-boolean';
import config from 'config';

import { App } from './app';
import { container } from 'tsyringe';
import { createTunnel } from './localtunnel';


const run = (): void => {
    const port = process.env.PORT || config.get('port');
    const app = container.resolve(App);

    app.server.listen(port, () => {
        consola.success(
            `Node Express server listening on http://localhost:${port}`
        );
    });

    if (toBoolean(process.env.TUNNELS)) {
        createTunnel();
    }
};

export default run;
