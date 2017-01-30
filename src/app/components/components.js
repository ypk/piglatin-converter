import angular from 'angular';
import Home from './home/home';
import Converter from './converter/converter';


let componentModule = angular.module('app.components', [
    Home,
    Converter
]).name;

export default componentModule;
