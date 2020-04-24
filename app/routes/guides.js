import Route from '@ember/routing/route';

export default class GuidesRoute extends Route {
  model() {
    // return this.store.peekAll('guide');
    return this.store.findAll('guide');
  }
}
