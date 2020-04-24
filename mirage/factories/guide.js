import Mirage, { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({

  title() {
    return `${faker.name.firstName()} plant`;
  },

  image() {
    return "https://picsum.photos/300/200";
  },

  description() {
    return faker.lorem.sentence();
  },

  content() {
    return faker.lorem.paragraphs();
  },

});