import Component from '@glimmer/component';
import DiscourseURL from "discourse/lib/url";

export default class HomePageMainRedirectComponent extends Component {
    constructor() {
        super(...arguments);
        DiscourseURL.redirectTo(`${settings.homepages_main_page}`);
    }
}
