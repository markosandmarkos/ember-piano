import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('sign-up');
  this.route('login');

  this.route('sounds', function () {
    this.route('play', {path: ':sound_type'});
  });
});

export default Router;
