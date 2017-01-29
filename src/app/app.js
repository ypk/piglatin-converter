import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import common from './common/common';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    common,
    Components
]).config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
}).component('app', AppComponent);
