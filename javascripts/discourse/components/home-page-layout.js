import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import { getOwner } from "@ember/application";
import { tracked } from "@glimmer/tracking";

export default class HomePageLayoutComponent extends Component {
  @service router;
  @service site;
  @tracked page;
  // @tracked toggleState = "expanded";
  // @tracked visability = "show";

  constructor() {
    super(...arguments);
    let page = JSON.parse(settings.homepage_components).filter(page => page.pageName === this.page_name)[0];
    page.lines.forEach((line) => {
      line.components.forEach((component) => {
        if (getOwner(this).hasRegistration(`component:${component.component_name}`)) {
          component.parsedParams = this.parseParams(component.params);
        } else {
          console.log(`Component ${component.component_name} not found`);
        }
      });
    });
    this.page = page;
  }

  parseParams(params) {
    let parsedParams = {}
    if (params) {
      params.forEach((p) => {
        parsedParams[p.name] = p.value;
      });
    }
    return parsedParams;
  };

  get page_name() {
    return this.router.currentRoute.queryParams.page_name
  };

  // get page() {
  //   let page = JSON.parse(settings.homepage_components).filter(page => page.pageName === this.page_name)[0];
  //   page.lines.forEach((line) => {
  //     line.components.forEach((component) => {
  //       debugger;
  //       if (getOwner(this).hasRegistration(`component:${component.component_name}`)) {
  //         component.parsedParams = this.parseParams(component.params);
  //       } else {
  //         console.log(`Component ${component.component_name} not found`);
  //       }
  //     });
  //   });
  //   return page;
  // };

//   <template>
//   {{this.safeHtmlContent}}
// </template>
}
