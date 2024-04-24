import DiscourseRoute from "discourse/routes/discourse";

export default class HomePagesRoute extends DiscourseRoute{
  model(params) {
    console.log('This is the dynamic segment data: ' + params.home-pages-id);
  }
};
