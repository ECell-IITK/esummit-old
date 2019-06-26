/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  /*---------------------------------------------------- */
  /* Preloader
	------------------------------------------------------ */
  $(window).load(function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader")
        .delay(300)
        .fadeOut("slow");
    });
  });

  /*----------------------------------------------------*/
  /* Flexslider
  	/*----------------------------------------------------*/
  $(window).load(function () {
    if ("Notification" in window && navigator.serviceWorker) {
      // Display the UI to let the user toggle notifications
      Notification.requestPermission(function (status) {
        console.log("Notification permission status:", status);
      });
    }
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazyload"
    });

    // const esummit = new Date(2018, 7, 24, 18, 0, 0).getTime();
    // // console.log(esummit.toString());

    // // countdown
    // let timer = setInterval(function () {

    //   // get today's date
    //   const today = new Date().getTime();

    //   // get the difference
    //   const diff = esummit - today;

    //   // math
    //   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    //   let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //   // display
    //   document.getElementById("timer").innerHTML =
    //     "<div class=\"days\"> \
    //       <div class=\"numbers\">" + days + "</div><div>days</div></div> \
    //     <div class=\"hours\"> \
    //       <div class=\"numbers\">" + hours + "</div><div>hours</div></div> \
    //     <div class=\"minutes\"> \
    //       <div class=\"numbers\">" + minutes + "</div><div>minutes</div></div> \
    //     <div class=\"seconds\"> \
    //       <div class=\"numbers\">" + seconds + "</div><div>seconds</div></div> \
    //     </div>";

    // }, 1000);


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
      before: function (slider) {
        $(slider)
          .find(".animated")
          .each(function () {
            $(this).removeAttr("class");
          });
      },
      start: function (slider) {
        $(slider)
          .find(".flex-active-slide")
          .find("h1")
          .addClass("animated fadeInDown show")
          .next()
          .addClass("animated fadeInUp show");

        $(window).trigger("resize");
      },
      after: function (slider) {
        $(slider)
          .find(".flex-active-slide")
          .find("h1")
          .addClass("animated fadeInDown show")
          .next()
          .addClass("animated fadeInUp show");
      }
    });

    $("#testimonial-slider").flexslider({
      namespace: "flex-",
      controlsContainer: "",
      animation: "slide",
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false
    });

    $.get("eventPopup.html", function (data) {
      $("#event-popup-container").html(data);
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

      $(document).on("click", ".popup-modal-dismiss", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    });
  });

  var folder = "images/sponsors/";

  $(window).load(() => {
    $.ajax({
      url: folder,
      success: function (data) {
        $(data)
          .find("a")
          .attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
              $("#sponsor-slider").append(`
					<li class="sponsor">
						<img src="${folder}${val}">
					</li>`);
            }
          });
        new skrolr("sponsor-slider", {
          waitTime: 750,
          moveTime: 750,
          numWide: [
            [0, 500, 1], // width of parent is 0-499px, show 1 <li> element
            [500, 750, 2],
            [750, 1000, 3],
            [1000, 1250, 4],
            [1250, 1500, 5],
            [1500, 1750, 6],
            [1750, , 7] // width of parent is at least (no maximum) 1750px, show 7 <li> elements
          ],
          size: "100% 150px", // width then height
          arrows: true,
          buttons: false
        });
      }
    });
    var j = Math.random() * 3;
    var i = Math.floor(j) + 1;
    console.log(j, i);
    $("#bg-video-container").append(`
      <video class="bg-video" id="video1" muted autoplay loop>
        <source src="videos/${i}.webm" type="video/webm">
        <source src="videos/${i}.mov">
        <source src="videos/${i}.mp4" type="video/mp4">
      </video>
  `);
    document.getElementById("video1").play();
  });

  new skrolr("speaker-slider", {
    waitTime: 2000,
    moveTime: 750,
    numWide: [
      [0, 500, 1], // width of parent is 0-499px, show 1 <li> element
      [500, 750, 2],
      [750, 1000, 3],
      [1000, 1250, 4],
      [1250, 1500, 5],
      [1500, 1750, 6],
      [1750, , 7] // width of parent is at least (no maximum) 1750px, show 7 <li> elements
    ],
    size: "100% 300px", // width then height
    arrows: true,
    buttons: false
  });

  /*----------------------------------------------------*/
  /* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
  $(window).on("scroll", function () {
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
    handler: function (direction) {
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
  setTimeout(function () {
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

  toggle_button.on("click", function (e) {
    e.preventDefault();
    nav.slideToggle("fast");
  });

  if (toggle_button.is(":visible")) nav.addClass("mobile");
  $(window).resize(function () {
    if (toggle_button.is(":visible")) nav.addClass("mobile");
    else nav.removeClass("mobile");
  });

  $("ul#nav li a").on("click", function () {
    if (nav.hasClass("mobile")) nav.fadeOut("fast");
  });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  	------------------------------------------------------ */
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /*  Placeholder Plugin Settings
	------------------------------------------------------ */
  $("input, textarea").placeholder();

  /*----------------------------------------------------*/
  /*	contact form
	------------------------------------------------------*/

  /* local validation */
  $("#contactForm").validate({
    /* submit via ajax */
    submitHandler: function (form) {
      var sLoader = $("#submit-loader");

      $.ajax({
        type: "POST",
        url: "inc/sendEmail.php",
        data: $(form).serialize(),
        beforeSend: function () {
          sLoader.fadeIn();
        },
        success: function (msg) {
          // Message was sent
          if (msg == "OK") {
            sLoader.fadeOut();
            $("#message-warning").hide();
            $("#contactForm").fadeOut();
            $("#message-success").fadeIn();
          }
          // There was an error
          else {
            sLoader.fadeOut();
            $("#message-warning").html(msg);
            $("#message-warning").fadeIn();
          }
        },
        error: function () {
          sLoader.fadeOut();
          $("#message-warning").html("Something went wrong. Please try again.");
          $("#message-warning").fadeIn();
        }
      });
    }
  });
})(jQuery);
