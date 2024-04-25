import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";
import EmberObject from "@ember/object";
import { inject as service } from "@ember/service";

export default class HomePageRoute extends DiscourseRoute{
  @service router;

  model(data, transition) {
    const data_mine = data;
    const transition_time = transition;
    const currentPage = transition.intent.url.split('/').pop();

    return ajax(`/${currentPage}.json`)
      .then((results) => {
        console.log(results);
        return EmberObject.create({
          results: results
        });
      })
      .catch(popupAjaxError);
  }
}
