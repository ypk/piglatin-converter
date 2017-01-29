import angular from 'angular';
import Navbar from './navbar/navbar';

let commonModule = angular.module('app.commonModule', [
  Navbar
]).name;

export default commonModule;
