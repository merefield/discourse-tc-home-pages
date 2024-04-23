import Component from '@glimmer/component';
import { htmlSafe } from "@ember/template";

export default class HomePageHtmlComponent extends Component {

  get safeHtmlContent() {
    debugger;
    return htmlSafe(this.args.params.content)
  }

  <template>
    {{this.safeHtmlContent}}
  </template>
}
  
