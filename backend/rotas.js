import UsuarioController from './controller/UsuarioController.js';
import AdminController from './controller/AdminController.js';

export default function adicionarRotas(api) {
    api.use('/usuario', UsuarioController);
    app.use('/admin', AdminController);
}
