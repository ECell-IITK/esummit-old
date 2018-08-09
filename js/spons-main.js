/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function($) {
  "use strict";

  /*---------------------------------------------------- */
  /* Preloader
      ------------------------------------------------------ */
  $(window).load(function() {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function() {
      // will fade out the whole DIV that covers the website.
      $("#preloader")
        .delay(300)
        .fadeOut("slow");
    });
  });

  /*----------------------------------------------------*/
  /* Flexslider
        /*----------------------------------------------------*/
  $(window).load(function() {
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazyload"
    });

    $("#hero-slider").flexslider({
      namespace: "flex-",
      controlsContainer: ".hero-container",
      animation: "fade",
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
      before: function(slider) {
        $(slider)
          .find(".animated")
          .each(function() {
            $(this).removeAttr("class");
          });
      },
      start: function(slider) {
        $(slider)
          .find(".flex-active-slide")
          .find("h1")
          .addClass("animated fadeInDown show")
          .next()
          .addClass("animated fadeInUp show");

        $(window).trigger("resize");
      },
      after: function(slider) {
        $(slider)
          .find(".flex-active-slide")
          .find("h1")
          .addClass("animated fadeInDown show")
          .next()
          .addClass("animated fadeInUp show");
      }
    });
  });
  var link = new Array(40);  
  var i;
  for(i=0;i<40;i++)
  {
    link[i]="#";
  }
  link[1]="http://internshala.com";
  var folder = "images/sponsors/";
  var linkcount =0;
  $(window).load(() => {
    $.ajax({
      url: folder,
      success: function(data) {
        $(data)
          .find("a")
          .attr("href", function(i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
              
              $("#sponsors-gallery").append(`
                    <div class="grid-item">
                    <a href=${link[linkcount]} >
                    <img src="${folder}${val}"/>
                    </a>
                    </div>`);
                    linkcount++;
            }
          });
        $(".grid").isotope({
          // options...
          itemSelector: ".grid-item",
          layoutMode: "fitRows"
        });
        // new skrolr("sponsor-slider", {
        //   waitTime: 2000,
        //   moveTime: 750,
        //   numWide: [
        //     [0, 500, 1], // width of parent is 0-499px, show 1 <li> element
        //     [500, 750, 2],
        //     [750, 1000, 3],
        //     [1000, 1250, 4],
        //     [1250, 1500, 5],
        //     [1500, 1750, 6],
        //     [1750, , 7] // width of parent is at least (no maximum) 1750px, show 7 <li> elements
        //   ],
        //   size: "100% 150px", // width then height
        //   arrows: true,
        //   buttons: false
        // });
      }
    });
  });

  // new skrolr("speaker-slider", {
  //   waitTime: 2000,
  //   moveTime: 750,
  //   numWide: [
  //     [0, 500, 1], // width of parent is 0-499px, show 1 <li> element
  //     [500, 750, 2],
  //     [750, 1000, 3],
  //     [1000, 1250, 4],
  //     [1250, 1500, 5],
  //     [1500, 1750, 6],
  //     [1750, , 7] // width of parent is at least (no maximum) 1750px, show 7 <li> elements
  //   ],
  //   size: "100% 300px", // width then height
  //   arrows: true,
  //   buttons: false
  // });

  /*----------------------------------------------------*/
  /* Adjust Primary Navigation Background Opacity
      ------------------------------------------------------*/
  $(window).on("scroll", function() {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var header = $("#main-header");

    if (y > h + 30 && $(window).outerWidth() > 768) {
      header.addClass("opaque");
    } else {
      if (y < h + 30) {
        header.removeClass("opaque");
      } else {
        header.addClass("opaque");
      }
    }
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
        ------------------------------------------------------*/
  var sections = $("section"),
    navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function(direction) {
      var active_section;

      active_section = $("section#" + this.element.id);

      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },

    offset: "25%"
  });

  /*----------------------------------------------------*/
  /* FitText Settings
        ------------------------------------------------------ */
  setTimeout(function() {
    $("#hero-slider h1").fitText(1, {
      minFontSize: "30px",
      maxFontSize: "49px"
    });
  }, 100);

  /*-----------------------------------------------------*/
  /* Mobile Menu
     ------------------------------------------------------ */
  var menu_icon = $("<span class='menu-icon'>Menu</span>");
  var toggle_button = $("<a>", {
    id: "toggle-btn",
    html: "",
    title: "Menu",
    href: "#"
  });
  var nav_wrap = $("nav#nav-wrap");
  var nav = $("ul#nav");

  /* if JS is enabled, remove the two a.mobile-btns
        and dynamically prepend a.toggle-btn to #nav-wrap */
  nav_wrap.find("a.mobile-btn").remove();
  toggle_button.append(menu_icon);
  nav_wrap.prepend(toggle_button);

  toggle_button.on("click", function(e) {
    e.preventDefault();
    nav.slideToggle("fast");
  });

  if (toggle_button.is(":visible")) nav.addClass("mobile");
  $(window).resize(function() {
    if (toggle_button.is(":visible")) nav.addClass("mobile");
    else nav.removeClass("mobile");
  });

  $("ul#nav li a").on("click", function() {
    if (nav.hasClass("mobile")) nav.fadeOut("fast");
  });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
        ------------------------------------------------------ */
  // $(".smoothscroll").on("click", function(e) {
  //   e.preventDefault();

  //   var target = this.hash,
  //     $target = $(target);

  //   $("html, body")
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $target.offset().top
  //       },
  //       800,
  //       "swing",
  //       function() {
  //         window.location.hash = target;
  //       }
  //     );
  // });

  /*----------------------------------------------------*/
  /*	Modal Popup
      ------------------------------------------------------*/
  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 300,
    showCloseBtn: false,
    mainClass: "mfp-fade"
  });

  $(document).on("click", ".popup-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*  Placeholder Plugin Settings
      ------------------------------------------------------ */
  $("input, textarea").placeholder();
})(jQuery);
