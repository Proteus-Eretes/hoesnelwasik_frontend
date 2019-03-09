module.exports = shipit => {
    require('shipit-deploy')(shipit);

    shipit.task('copyConfig', async () => {
        const date = new Date();
        await shipit.copyToRemote(
            'dist/',
            '/srv/uitslagen.poweredbyiris.nl/releases/' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds()
        );
        await shipit.remote('ln -snf releases/' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + ' /srv/uitslagen.poweredbyiris.nl/current');
    });

    shipit.initConfig({
        default: {
            deployTo: '/srv/uitslagen.poweredbyiris.nl',
            repositoryUrl: 'https://github.com/Proteus-Eretes/hoesnelwasik_frontend.git',
        },
        live: {
            servers: 'dev@poweredbyiris.nl',
        },
    })
}