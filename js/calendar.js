/*jshint expr:true */

jQuery(function($) {
	function exist(o) {
		var d = ($(o).length > 0) ? true : false;
		return d;
	}
	$(document).ready(function() {
		function advent_calendar() {
			var grid = document.querySelector('.js-calendar .js-grid'),
				msnry = new Masonry(grid, {
					itemSelector: '.c-calendar__item',
					columnWidth: '.c-calendar__sizer',
					gutter: '.c-calendar__gutter-sizer',
					percentPosition: true,
					stamp: '.stamp'
				});
			
			var nav = function() {
				var item = $('.c-calendar__item');
				function openUrl(url) {
					window.location.href = url;
				}
				
				function desktop() {
					item.on('click', function() {
						var _t = $(this);
						_t.toggleClass('is-open');
						//openUrl(_t.attr('data-url'));
					});
				}
				function mobile() {
					item.on('click', function() {
						var _t = $(this);
						if (_t.hasClass('is-open')) {
							openUrl(_t.attr('data-url'));
						} else {
							item.removeClass('is-open');
							_t.toggleClass('is-open');
						}
					});
				}				
				$('html').hasClass('mobile') ? mobile() : desktop();
			};
			//nav();
		}
		
		 function popup() {
			$('.js-modal').magnificPopup({
				type: 'inline',
				//closeBtnInside: true,
				preloader: false,
				removalDelay: 300,
				mainClass: 'my-mfp-zoom-in'
			});

			$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		}

		exist('.js-calendar') && advent_calendar();
		exist('.js-modal') && popup();
	});
});