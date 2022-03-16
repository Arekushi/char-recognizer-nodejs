import localtunnel from 'localtunnel';
import consola from 'consola';
import config from 'config';


export const createTunnel = (async () => {
    const tunnel = await localtunnel({
        subdomain: config.get('tunnels.subdomain'),
        port: Number(process.env.TUNNELS_PORT) || config.get('tunnels.port')
    });

    consola.success(`Tunnel: ${tunnel.url}`);
});
