


$(function()
{
    var $dropdowns = $('li.submenu_list'); // Specifying the element is faster for older browsers

    /**
     * Mouse events
     *
     * @description Mimic hoverIntent plugin by waiting for the mouse to 'settle' within the target before triggering
     */
    $dropdowns
        .on('mouseover', function() // Mouseenter (used with .hover()) does not trigger when user enters from outside document window
        {
            var $this = $(this);

            if ($this.prop('hoverTimeout'))
            {
                $this.prop('hoverTimeout', clearTimeout($this.prop('hoverTimeout')));
            }

            $this.prop('hoverIntent', setTimeout(function()
            {
                $this.addClass('hover');
            }, 100));
        })
        .on('mouseleave', function()
        {
            var $this = $(this);

            if ($this.prop('hoverIntent'))
            {
                $this.prop('hoverIntent', clearTimeout($this.prop('hoverIntent')));
            }

            $this.prop('hoverTimeout', setTimeout(function()
            {
                $this.removeClass('hover');
            }, 100));
        });

    /**
     * Touch events
     *
     * @description Support click to open if we're dealing with a touchscreen
     */
    if ('ontouchstart' in document.documentElement)
    {
        $dropdowns.each(function()
        {
            var $this = $(this);

            this.addEventListener('touchstart', function(e)
            {
                if (e.touches.length === 1)
                {
                    // Prevent touch events within dropdown bubbling down to document
                    e.stopPropagation();

                    // Toggle hover
                    if (!$this.hasClass('hover'))
                    {
                        // Prevent link on first touch
                        if (e.target === this || e.target.parentNode === this)
                        {
                            e.preventDefault();
                        }

                        // Hide other open dropdowns
                        $dropdowns.removeClass('hover');
                        $this.addClass('hover');

                        // Hide dropdown on touch outside
                        document.addEventListener('touchstart', closeDropdown = function(e)
                        {
                            e.stopPropagation();

                            $this.removeClass('hover');
                            document.removeEventListener('touchstart', closeDropdown);
                        });
                    }
                }
            }, false);
        });
    }
    
});







jQuery(document).ready(function()
{
	
	
jQuery('#search').click(function()
{ 
		

				jQuery('.search_block').slideToggle(400);
});





jQuery('.hilight_menu').click(function()
{ 
		

				jQuery('.hilight_menu_list').slideToggle(400);
});

/*block*/
jQuery('.block #thumb01').mouseover(function()
{ 
		

				jQuery('#thumb01 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb01').mouseleave(function()
{ 
		

				jQuery('#thumb01 .hover_detail').fadeOut(400);
			
});


jQuery('.block #thumb02').mouseover(function()
{ 
		

				jQuery('#thumb02 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb02').mouseleave(function()
{ 
		

				jQuery('#thumb02 .hover_detail').fadeOut(400);
			
});
jQuery('.block #thumb03').mouseover(function()
{ 
		

				jQuery('#thumb03 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb03').mouseleave(function()
{ 
		

				jQuery('#thumb03 .hover_detail').fadeOut(400);
			
});

jQuery('.block #thumb04').mouseover(function()
{ 
		

				jQuery('#thumb04 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb04').mouseleave(function()
{ 
		

				jQuery('#thumb04 .hover_detail').fadeOut(400);
			
});

jQuery('.block #thumb05').mouseover(function()
{ 
		

				jQuery('#thumb05 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb05').mouseleave(function()
{ 
		

				jQuery('#thumb05 .hover_detail').fadeOut(400);
			
});

jQuery('.block #thumb06').mouseover(function()
{ 
		

				jQuery('#thumb06 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb06').mouseleave(function()
{ 
		

				jQuery('#thumb06 .hover_detail').fadeOut(400);
			
});


jQuery('.block #thumb07').mouseover(function()
{ 
		

				jQuery('#thumb07 .hover_detail').fadeIn(400);
			
});


jQuery('.block #thumb07').mouseleave(function()
{ 
		

				jQuery('#thumb07 .hover_detail').fadeOut(400);
			
});





jQuery('#artist01.block_thumb01 ').mouseover(function()
{ 
		

				jQuery('#artist01 .hover_detail').fadeIn(400);
			
});


jQuery('#artist01.block_thumb01').mouseleave(function()
{ 
		

				jQuery('#artist01 .hover_detail').fadeOut(400);
			
});

jQuery('#artist02.block_thumb02 ').mouseover(function()
{ 
		

				jQuery('#artist02 .hover_detail').fadeIn(400);
			
});


jQuery('#artist02.block_thumb02').mouseleave(function()
{ 
		

				jQuery('#artist02 .hover_detail').fadeOut(400);
			
});

jQuery('#artist03.block_thumb02 ').mouseover(function()
{ 
		

				jQuery('#artist03 .hover_detail').fadeIn(400);
			
});


jQuery('#artist03.block_thumb02').mouseleave(function()
{ 
		

				jQuery('#artist03 .hover_detail').fadeOut(400);
			
});

/*block*/

jQuery('.dropdown').click(function()
{ 
		

				jQuery('.dropdown_list').slideToggle(400);
});







jQuery(' #topchart.share_block').click(function()
{ 
		

				jQuery('#topchart.share_active  ').fadeIn(300);
			
});


jQuery('#topchart.share_active  ').mouseleave(function()
{ 
		

					jQuery('  #topchart.share_active ').fadeOut(400);
			
});


jQuery(' #socialartist.share_block').click(function()
{ 
		

				jQuery('#socialartist.share_active  ').fadeIn(300);
			
});


jQuery('#socialartist.share_active  ').mouseleave(function()
{ 
		

					jQuery(' #socialartist.share_active ').fadeOut(400);
			
});




jQuery(' #stream.share_block').click(function()
{ 
		

				jQuery('#stream.share_active  ').fadeIn(300);
			
});


jQuery('#stream.share_active  ').mouseleave(function()
{ 
		

					jQuery(' #stream.share_active ').fadeOut(400);
			
});


jQuery('#stream01.action_block .share_block').click(function()
{ 
		

				jQuery('#stream01.action_block .share_active').fadeIn(300);
			
});


jQuery('#stream01.action_block').mouseleave(function()
{ 
		

					jQuery('#stream01 .share_active').fadeOut(400);
			
});

jQuery('#stream02.action_block .share_block').click(function()
{ 
		

				jQuery('#stream02.action_block .share_active').fadeIn(300);
			
});


jQuery('#stream02.action_block').mouseleave(function()
{ 
		

					jQuery('#stream02 .share_active').fadeOut(400);
			
});

jQuery('#stream03.action_block .share_block').click(function()
{ 
		

				jQuery('#stream03.action_block .share_active').fadeIn(300);
			
});


jQuery('#stream03.action_block').mouseleave(function()
{ 
		

					jQuery('#stream03 .share_active').fadeOut(400);
			
});

jQuery('#stream04.action_block .share_block').click(function()
{ 
		

				jQuery('#stream04.action_block .share_active').fadeIn(300);
			
});


jQuery('#stream04.action_block').mouseleave(function()
{ 
		

					jQuery('#stream04 .share_active').fadeOut(400);
			
});

jQuery('.action .share_block').click(function()
{ 
		

				jQuery('.action .share_active').fadeIn(400);
			
});


jQuery('.action').mouseleave(function()
{ 
		

					jQuery('.share_active').fadeOut(400);
			
});





jQuery('.artist_social .share_block').click(function()
{ 
		

				jQuery('.artist_social .share_active').fadeIn(300);
			
});


jQuery('.artist_social').mouseleave(function()
{ 
		

					jQuery('.share_active').fadeOut(400);
			
});




jQuery('.suggestion_block #sugges01.share_block').click(function()
{ 
		

				jQuery('.suggestion_block #sugges01.share_active  ').fadeIn(300);
			
});


jQuery('.suggestion_block #sugges01.share_active  ').mouseleave(function()
{ 
		

					jQuery('.suggestion_block  #sugges01.share_active ').fadeOut(400);
			
});

jQuery(' #sugges02.share_block').click(function()
{ 
		

				jQuery(' #sugges02.share_active  ').fadeIn(300);
			
});


jQuery(' #sugges02.share_active  ').mouseleave(function()
{ 
		

					jQuery('  #sugges02.share_active ').fadeOut(400);
			
});



jQuery(' #sugges03.share_block').click(function()
{ 
		

				jQuery(' #sugges03.share_active  ').fadeIn(300);
			
});


jQuery(' #sugges03.share_active  ').mouseleave(function()
{ 
		

					jQuery('  #sugges03.share_active ').fadeOut(400);
			
});

jQuery(' #sugges04.share_block').click(function()
{ 
		

				jQuery(' #sugges04.share_active  ').fadeIn(300);
			
});


jQuery(' #sugges04.share_active  ').mouseleave(function()
{ 
		

					jQuery('  #sugges04.share_active ').fadeOut(400);
			
});


jQuery(' #sugges05.share_block').click(function()
{ 
		

				jQuery(' #sugges05.share_active  ').fadeIn(300);
			
});


jQuery(' #sugges05.share_active  ').mouseleave(function()
{ 
		

					jQuery('  #sugges05.share_active ').fadeOut(400);
			
});

/*download*/
jQuery('img#socialdl01').mouseover(function()
{ 
	
			jQuery('#socialdl01.hover').fadeIn(300);
			
});


jQuery('#socialdl01.hover ').mouseleave(function()
{ 
		

					jQuery('#socialdl01.hover ').fadeOut(400);
			
});

});