import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class DoublerComponent extends Component {
  get doubled() {
    return this.args.number * 2;
  }

  @computed()
  get computeOnce() {
    return this.args.number * 2;
  }
}
