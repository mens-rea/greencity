import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import faker from 'faker';
import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default class EntrySubmissionComponent extends Component {
  @service store;
  @tracked value;
  @tracked content;
  placeholder = 'Title of your guide';

  @action
  updateEntry(event) {
    this.value = event.target.value;
  }

  @action
  submitEntry() {
    alert(this.value);
    this.store.createRecord('guide', {
      title: this.value,
      image: "https://picsum.photos/300/200",
      description: faker.lorem.sentence(),
      content: this.content
    }).save();
  }
}
