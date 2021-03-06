import { Router } from 'express';
import multer from 'multer';
import multerCofig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NoticationController from './app/controllers/NoticationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerCofig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Global
// como está abaixo das demais, só vai valer para a route abaixo
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NoticationController.index);

routes.post('/files', upload.single('file'), FileController.store);

// routes.put('/users', authMiddleware, UserController.update);

export default routes;
