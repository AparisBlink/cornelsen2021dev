(function (blink) {
	'use strict';

	var cornelsen2021devStyle = function () {
			blink.theme.styles.mcgrawhill.apply(this, arguments);
		},
		page = blink.currentPage;

	cornelsen2021devStyle.prototype = {
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_cornelsen2021dev',
		toolbar: {
			name: 'editorial',
			items: ['Blink_popover']
		},
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {
			name: 'cornelsen2021dev',
			styles: [
				{ name: 'Title 1', element: 'h3', attributes: { 'class': 'bck-title bck-title-1'} },
				{ name: 'Title 2', element: 'h3', attributes: { 'class': 'bck-title bck-title-2'} },
				{ name: 'Title 3', element: 'h3', attributes: { 'class': 'bck-title bck-title-3'} },
				{ name: 'Title 4', element: 'h3', attributes: { 'class': 'bck-title bck-title-4'} },

				{ name: 'Énfasis 1', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis 2', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },

				{ name: 'Lista Ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-1' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },
				{ name: 'Lista Ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-4' } },

				{ name: 'Lista Desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-1' } },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-2' } },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-3' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },

				{ name: 'Icono Critical Thinking', element: 'span', attributes: { 'class': 'icon icon-critical' } },

				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-3' } },
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			var that = this;
			this.parent.init.call(this.parent, this);
			this.parent.initInfoPopover();
			blink.events.on("course_loaded", function(){
				deshabilitarMenuContextual("video, img, audio, .audio");
			});
			this.blockLeftButton()
		},

		blockLeftButton: function () { 
			$("body").on("contextmenu",function(e){
				e.preventDefault();
				return false;
			 }); 
			 if ($('.short-answer') && !$('.bck-dropdown').hasClass('open')) {
				 $('.short-answer .bck-dropdown .bck-dropdown-content').hide()
			 }
			 
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		formatCarouselindicators: function () {
			this.parent.formatCarouselindicators.call(this.parent, this, 'cornelsen2021dev-navbar');
		},

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";
		},

		animateNavbarOnScroll: function () {
			this.parent.animateNavbarOnScroll.call(this.parent, this, 'cornelsen2021dev-navbar');
		},

		activityDropdown: function () {
		    return false;
		},
		deshabilitarMenuContextualGaleria: function(){
			return true;
		},
		permiteVerUltimaSlide: function(){
			return false;
		}

	};

	cornelsen2021devStyle.prototype = _.extend({}, new blink.theme.styles.mcgrawhill(), cornelsen2021devStyle.prototype);

	blink.theme.styles['cornelsen2021dev'] = cornelsen2021devStyle;

})(blink);
