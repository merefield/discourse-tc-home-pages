import DiscourseRoute from "discourse/routes/discourse";
import { inject as service } from "@ember/service";

export default class DynamicPageRoute extends DiscourseRoute{
  @service router;

  model(_, transition) {
    const currentPage = transition?.intent?.url?.split('/').pop();

    console.log('currentPage', currentPage);
  }
}