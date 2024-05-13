import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";
import EmberObject from "@ember/object";
import { inject as service } from "@ember/service";

export default class SimplePageRoute extends DiscourseRoute{
  @service router;

  model(_, transition) {
    const currentPage = transition?.intent?.url?.split('/').pop();

    if (currentPage !== undefined) {
      return ajax(`/${currentPage}.json`)
        .then((results) => {
          return EmberObject.create({
            results: results
          });
        })
        .catch(popupAjaxError);
    }
  }
}
