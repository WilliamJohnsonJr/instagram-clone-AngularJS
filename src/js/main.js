import angular from 'angular';
import 'angular-ui-router';

//import contstants and server
import { server } from './server.constant';

//import config
import { config } from './config';

//import controllers
import { HomeController } from './controllers/home.controller';
import { DetailController } from './controllers/detail.controller';
import { AddEditController} from './controllers/addedit.controller';

angular
	.module('app', ['ui.router'])
	.config(config)
	.constant('SERVER', server)
	.controller('HomeController', HomeController)
	.controller('DetailController', DetailController)
	.controller('AddEditController', AddEditController);