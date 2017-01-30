import angular from 'angular';
import uiRouter from 'angular-ui-router';
import converterComponent from './converter.component';

let converterModule = angular.module('converter', [
    uiRouter
]).config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home.converter', {
            url: '/',
            component: 'converter'
        });
}).component('converter', converterComponent).name;

export default converterModule;
