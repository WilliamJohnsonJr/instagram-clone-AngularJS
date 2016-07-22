import angular from 'angular';

//import contstants and server
import { server } from './server.constant';

//import config
import { config } from './config.js';

//import controllers
import { HomeController } from './controllers/home.controller';
import { DetailController } from './controllers/detail.controller';
import { AddEditController} from './controller'

angular
	.module('app', [])
	.config(config)
	.constant('SERVER', server)
	.controller('HomeController', HomeController)
	.controller('DetailController', DetailController)
	.controller('AddEditController', AddEditController)