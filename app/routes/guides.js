import Route from '@ember/routing/route';

export default class GuidesRoute extends Route {
  model() {
    return ['Basil', 'Ginger', 'Chili'];
  }
}
