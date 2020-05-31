import Mirage, { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({

  title() {
    return `${faker.name.firstName()} plant`;
  },

  type() {
    return faker.lorem.word();
  },

  image() {
    return "https://picsum.photos/600/300";
  },

  description() {
    return faker.lorem.paragraph();
  },

  content() {
    return faker.lorem.paragraphs();
  },

});