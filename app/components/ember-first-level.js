import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class EmberFirstLevelComponent extends Component {
  @computed('number')
  get expectedSqrt() {
    return Math.sqrt(this.number);
  }
}
