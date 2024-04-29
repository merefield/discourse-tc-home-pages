export default function () {
  this.route('home-page', { path: '/discourse-home-pages/home-page/:page_id'});
  this.route('landing-page', { path: '/discourse-home-pages/landing-page/:page_id'});
};
