import 'jquery-nice-select'
import 'labelauty'

import pageWidget from './utils/pages-widget';
import './devs/popups';
import { $globals } from './utils/utils';

pageWidget([
  'index',
  'about',
  'blog',
  'single',
  'contacts',
  'blocks',
]);


jQuery(document).ready($ => {

    $('select').niceSelect();

    $(":checkbox").labelauty({ label: false });

    $('.js-toggle-nav').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('opened');
      $globals.body.toggleClass('navIn');
    });

});