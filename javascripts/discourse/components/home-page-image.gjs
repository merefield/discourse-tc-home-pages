import Component from '@glimmer/component';
import { htmlSafe } from "@ember/template";

export default class HomePageImageComponent extends Component {
  <template>
    <a href={{this.args.params.link_url}}><img src={{this.args.params.image_url}}/></a>
  </template>
}