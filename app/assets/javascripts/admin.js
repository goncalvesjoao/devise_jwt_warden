// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require tether
//= require bootstrap
//= require turbolinks

(function (window, $) {
  window.yabp = window.yabp || {};

  $(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
      var $this = $(this);
      var $leftArrow = $this.find('[data-id="left_arrow"]');
      var $rightArrow = $this.find('[data-id="right_arrow"]');
      var $offcanvasElement = $('.row-offcanvas');

      if ($offcanvasElement.hasClass('active')) {
        $offcanvasElement.removeClass('active');
        $leftArrow.addClass('d-none');
        $rightArrow.removeClass('d-none');
      } else {
        $offcanvasElement.addClass('active');
        $leftArrow.removeClass('d-none');
        $rightArrow.addClass('d-none');
      }
    });
  });
})(window, jQuery);
