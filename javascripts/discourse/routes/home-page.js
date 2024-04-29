import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";
import EmberObject from "@ember/object";
import { inject as service } from "@ember/service";

export default class HomePageRoute extends DiscourseRoute{
  @service router;

  model(_, transition) {
    const currentPage = transition?.intent?.url?.split('/').pop();

    console.log('currentPage', currentPage);
  }
}