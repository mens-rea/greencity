import Component from '@glimmer/component';
import { isEmpty } from '@ember/utils';

export default class GuidesListComponent extends Component {
  get isGuidesEmpty() {
    return isEmpty(this.args.guides);
  }
}
