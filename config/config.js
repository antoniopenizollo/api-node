const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:nZJuzAeohOx7td9O@clusterapi-0igpf.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'antonio2020',
                jwt_expires_in: '7d'
            }
        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:nZJuzAeohOx7td9O@clusterapi-0igpf.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'antonio2020',
                jwt_expires_in: '7d'
            }
        case 'prod':
            return{
                bd_string: 'mongodb+srv://usuario_admin:nZJuzAeohOx7td9O@clusterapi-0igpf.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'mfdsifndsfndsf%$%$sdcfmnfdsugvnfdxukvnkdxz$#@543vxvf',
                jwt_expires_in: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();