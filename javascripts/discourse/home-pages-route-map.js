export default function () {
  this.route('dynamic-page', { path: '/home-pages/dp/:page_id'});
  this.route('simple-page', { path: '/home-pages/sp/:page_id'});
};
