import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class GuideListComponent extends Component {
  @action
  showGuide(guide) {
    alert(`This guide is for growing ${guide}!`);
  }
}