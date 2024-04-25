import DiscourseRoute from "discourse/routes/discourse";

export default class HomePageRoute extends DiscourseRoute{
  model() {
    console.log('This is the home pages route');
  }
};
