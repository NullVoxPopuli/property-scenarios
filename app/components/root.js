import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RootComponent extends Component {
  @tracked rootA = 0;
  @tracked rootB = 0;

  @action incrementA() {
    this.rootA++;
  }

  @action incrementB() {
    this.rootB++;
  }

  @action sqrt() {
    this.rootB = Math.sqrt(this.rootB);
  }
}
