import loadScript from "discourse/lib/load-script";
import Component from '@glimmer/component';
import { htmlSafe } from "@ember/template";
import { tracked } from "@glimmer/tracking";

export default class HomePageHtmlComponent extends Component {
  @tracked html = null;

  constructor() {
    super(...arguments);
    loadScript (
      settings.theme_uploads.showdown
    ).then (() => {
      const converter = new showdown.Converter()
      this.html =  htmlSafe(converter.makeHtml(this.args.params.markdown))
    })
  }

  <template>
    {{this.html}}
  </template>
}