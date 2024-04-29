import Component from '@glimmer/component';
import { htmlSafe } from "@ember/template";

export default class LandingPageComponent extends Component {
  get safeHtmlContent() {
    return htmlSafe(this.args.model.results.page)
  }

  <template>
    {{this.safeHtmlContent}}
  </template>
}
