import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = '/';
}

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('guides');
  this.route('story');
  this.route('home');
  this.route('projects');
});
