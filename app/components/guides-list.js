import Component from '@glimmer/component';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

export default class GuidesListComponent extends Component {
  @tracked guides = this.args.guides;

  get isGuidesEmpty() {
    return isEmpty(this.guides);
  }
}
