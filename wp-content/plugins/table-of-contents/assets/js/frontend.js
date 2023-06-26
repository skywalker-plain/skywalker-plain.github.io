;(function($) {
	IBToCBlock = function( settings ) {
		if ( '' === settings.container ) {
			return;
		}

		this.container = settings.container || '.ib-toc-container';
		this.anchors = settings.anchors;
		this.includeContainer = settings.includeContainer || '';
		this.excludeContainer = settings.excludeContainer || '';
		this.isHierarchical = settings.isHierarchical || $(this.container).hasClass( 'ib-toc-hierarchical' );
		this.isCollapsable = settings.isCollapsable || false;
		this.extraOffset = settings.extraOffset || 0;

		this.init();
	};

	$.extend( IBToCBlock.prototype, {
		init: function() {
			this.includeContainer = this.cleanSelectors( this.includeContainer );
			this.excludeContainer = this.cleanSelectors( this.excludeContainer );

			if ( '' === this.includeContainer || 0 === $(this.includeContainer).length ) {
				this.includeContainer = $('body').hasClass('wp-admin') ? '.edit-post-visual-editor' : 'body';
			}

			this.excludeHeadings();
			this.insertAnchors();

			$( this.container ).find( '.ib-toc-anchors' ).empty();

			if ( this.isHierarchical ) {
				this.hierarchicalView();
			} else {
				this.flatView();
			}

			if ( this.isCollapsable ) {
				$( this.container ).find( '.ib-toc-header' ).on( 'click', $.proxy( this.toggle, this ) );
			}

			this.smoothScroll();
		},

		cleanSelectors: function( selector ) {
			selector = 'undefined' !== typeof selector ? selector.trim() : '';
			if ( '' === selector ) {
				return selector;
			}

			var matches = selector.match( /^(#|.)([a-z|A-Z|0-9]|[-|_])*/g );

			if ( selector.length === 1 ) {
				matches = selector.match( /^([a-z|A-Z|[0-9])*/g );
			}

			if ( null !== matches && 'undefined' !== matches[0] ) {
				selector = matches[0];
			}

			if ( selector.endsWith( '|' ) || selector.endsWith( ',' ) || selector.endsWith( '.' ) ) {
				selector.slice( 0, selector.length - 1 );
			}

			return selector;
		},

		excludeHeadings: function() {
			// Exclude empty headings first.
			if ( '' !== this.includeContainer ) {
				$(this.includeContainer).find( this.anchors ).each(function() {
					if ( '' === $(this).text().trim() ) {
						$(this).addClass( 'ib-toc-exclude' );
					}
				});
			}

			// Exclude headings within exclude container.
			if ( '' !== this.excludeContainer && 'body' !== this.excludeContainer.trim() && 0 !== $( this.excludeContainer ).length ) {
				$( this.excludeContainer ).find( 'h1,h2,h3,h4,h5,h6' ).each(function() {
					$(this).addClass( 'ib-toc-exclude' );
				});
			}
		},

		insertAnchors: function() {
			$( this.includeContainer ).find( this.anchors ).not( '.ib-toc-exclude' ).before( function( index ) {
				var id = 'ib-toc-anchor-' + index;
				if ( $('#' + id).length > 0 ) {
					return;
				}
				return (
					'<span id="' + id + '"></span>'
				);
			} );
		},

		hierarchicalView: function() {
			var list = $( this.container ).find( '.ib-toc-anchors' ),
				stack = [list], // The upside-down stack keeps track of list elements
				listTag = list.prop('tagName').toLowerCase(),
				currentLevel = 0,
				headingSelectors = this.anchors.split( ',' );

			$( this.includeContainer ).find( this.anchors ).not( '.ib-toc-exclude' ).each( function( index ) {
				var elem = $( this ),
					level = $.map(headingSelectors, function (selector, index) {
						return elem.is( selector ) ? index : undefined;
					})[0];

				if (level > currentLevel) {
					// If the heading is at a deeper level than where we are, start a new nested
					// list, but only if we already have some list items in the parent. If we do
					// not, that means that we're skipping levels, so we can just add new list items
					// at the current level.
					// In the upside-down stack, unshift = push, and stack[0] = the top.
					var parentItem = stack[0].children( "li:last" )[0];
					if (parentItem) {
						stack.unshift( $( "<" + listTag + "/>" ).appendTo( parentItem ) );
					}
				} else {
					// Truncate the stack to the current level by chopping off the 'top' of the
					// stack. We also need to preserve at least one element in the stack - that is
					// the containing element.
					stack.splice( 0, Math.min( currentLevel - level, Math.max( stack.length - 1, 0 ) ) );
				}

				var id = 'ib-toc-anchor-' + index;

				// Add the list item
				$( "<li/>" ).appendTo( stack[0] ).append(
					$( "<a/>" ).text( elem.text().trim() ).attr( "href", "#" + id )
				);

				currentLevel = level;
			} );
		},

		flatView: function() {
			var listWrapper = $( this.container ).find( '.ib-toc-anchors' );
			$( this.includeContainer ).find( this.anchors ).not( '.ib-toc-exclude' ).each( function( index ) {
				var anchorLink = '<a href="#ib-toc-anchor-' + index + '">' + $( this ).text().trim() + '</a>';
				var listItem = '<li>' + anchorLink + '</li>';

				$( listItem ).appendTo( listWrapper );
			} );
		},

		toggle: function() {
			if ( $( this.container ).hasClass( 'ib-toc-expanded' ) ) {
				this.collapse();
			} else {
				this.expand();
			}
		},

		collapse: function() {
			var self = this;
			$( this.container ).find( '.ib-toc-body' ).slideUp( 400, function() {
				$( self.container ).removeClass( 'ib-toc-expanded' );
				$( self.container ).addClass( 'ib-toc-collapsed' );
			} );
		},

		expand: function() {
			var self = this;
			$( this.container ).find( '.ib-toc-body' ).slideDown( 400, function() {
				$( self.container ).removeClass( 'ib-toc-collapsed' );
				$( self.container ).addClass( 'ib-toc-expanded' );
			} );
		},

		smoothScroll: function() {
			var offset = 0,
				extraOffset = $( 'body' ).hasClass( 'admin-bar' ) ? 32 : 0,
				hash = '';

			if ( ! isNaN( this.extraOffset ) ) {
				extraOffset += this.extraOffset;
			}
				
			$( this.container ).find( 'a' ).on( 'click', function(e) {
				hash = $( this ).attr( 'href' ).replace( '#', '' );
				if ('' !== hash && $( '#' + hash ).length > 0) {
					e.preventDefault();
					offset = Math.round( $( '#' + hash ).offset().top - extraOffset );
					$( 'html, body' ).animate({
						scrollTop: offset
						}, 800, function () {
							window.location.hash = hash;
							window.scrollTo(0, offset);
						}
					);
				}
			} );
			$( window ).on( 'hashchange', function(e) {
				if ( '#' + hash === window.location.hash ) {
					e.preventDefault();
					e.stopPropagation();
					window.scrollTo(0, offset);
				}
			} );
		},
	} );

	var initToC = function() {
		var options = {
			container: '.ib-toc-container',
			anchors: $('.ib-block-toc').data('anchors'),
			includeContainer: $('.ib-block-toc').data('include'),
			excludeContainer: $('.ib-block-toc').data('exclude'),
			isCollapsable: $('.ib-block-toc').data('collapsable'),
			extraOffset: $('.ib-block-toc').data('offset'),
		};

		window['ibToC'] = new IBToCBlock( options );
	};

	if ( 'undefined' !== typeof wp && 'undefined' !== typeof wp.domReady ) {
		wp.domReady( initToC );
	} else {
		$( document ).ready( initToC );
	}
})(jQuery);
