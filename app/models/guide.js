import Model, {attr} from '@ember-data/model';

export default class GuideModel extends Model {
  @attr('string') title;
  @attr('string') image; 
  @attr('string') content;
}
