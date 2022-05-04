$ = jQuery;
$(document).ready(function () {
  $(".password-icon").click(function () {
    $(this).toggleClass("fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".login-btn").addClass("active");
  $(".login-btn").click(function () {
    $(".log-in-form-wrapper").show(500);
    $(".sign-in-form-wrapper").hide(500);
    $(this).addClass("active");
    $(".signup-btn").removeClass("active");
  });
  $(".signup-btn").click(function () {
    $(".log-in-form-wrapper").hide(500);
    $(".sign-in-form-wrapper").show(500);
    $(this).addClass("active");
    $(".login-btn").removeClass("active");
  });

  $("select").niceSelect();

  $(".log-in-wrapper").parent("body").addClass("login-page");

  $(function () {
    $("#wizard").steps({
      headerTag: "h2",
      bodyTag: "section",
    });
  });

  $(".fuature-slider").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    dot: true,
  });
  var n = $(".fuature-wrapper .owl-dots  .owl-dot").length;
  $(".fuature-wrapper .owl-dots").prependTo(".fuature-wrapper .counter");
  $(".fuature-wrapper .counter p").append("0" + n);

  $(".counter").appendTo(".fuature-wrapper .fuature-slider");

  $(".event-banner-slider").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    dot: true,
  });

  /* Sticky Header */
  jQuery(".main-header").addClass("non_sticky");
  if (jQuery(window).scrollTop() > 30) {
    jQuery(".main-header").addClass("sticky");
    jQuery(".main-header").removeClass("non_sticky");
  } else {
    jQuery(".main-header").removeClass("sticky");
    jQuery(".main-header").addClass("non_sticky");
  }
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 30) {
      jQuery(".main-header").addClass("sticky");
      jQuery(".main-header").removeClass("non_sticky");
    } else {
      jQuery(".main-header").removeClass("sticky");
      jQuery(".main-header").addClass("non_sticky");
    }
  });

  $(".header-scroll-down a").click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top - 90;
        $("html,body").animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });

  $(".tab-option").click(function () {
    var data = $(this).attr("data-id");
    $(".tab-section-content-box").css("display", "none");
    $('.tab-section-content-box[data-id="' + data + '"]').css(
      "display",
      "block"
    );
    $(".tab-option").removeClass("active");
    $(this).addClass("active");
  });

  // Accoridian
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".set .content").slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".set .content").slideUp(200);
      $(this).siblings(".set .content").slideDown(200);
    }
  });

  $('#confirmation input[type="submit"]').click(function () {
    setTimeout(function () {
      $("body").addClass("modal-open");
    }, 500);
  });

  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // tabbed content
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
  });
  $(".tab_drawer_heading").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
  });
  $("ul.tabs li").last().addClass("tab_last");

  $(".admire-show").click(function () {
    $(".popup_overlay").remove();
    $("body").prepend($('<div class="popup_overlay"></div>'));
    $(".admires-popup-wrapper").addClass("admires_active");
    $("body").css("overflow", "hidden");
  });

  $(".admires-close-btn").click(function () {
    $("body .popup_overlay").remove();
    $(".admires-popup-wrapper").removeClass("admires_active");
    $("body").css("overflow", "visible");
  });

  $("body").on("click", ".popup_overlay", function () {
    $(".admires-popup-wrapper").removeClass("admires_active");
    $(this).remove();
    $("body").css("overflow", "visible");
  });

  // $("#create-new-post-video-step").steps({
  //   headerTag: "h3",
  //   bodyTag: "section",
  //   autoFocus: true,
  // });

  // $(window).on('load', function() {
  //     $('#create-new-post-events').modal('show');
  // });

  // $(".drag-photo-here input[type=file]").change(function () {
  //   var filename = $(".drag-photo-here input[type=file]")
  //     .val()
  //     .replace(/C:\\fakepath\\/i, "");
  //   $(".filename strong").text(filename);

  //   if (filename !== "") {
  //     setTimeout(function () {
  //       $(".actions li:nth-child(2) a").trigger("click");
  //     }, 1000);
  //   }
  // });

  $(".img-action ul li a").click(function () {
    $(".img-action ul li a").removeClass("img-action-active");
    $(this).addClass("img-action-active");
  });

  $(".post-img img").click(function () {
    $(".img-action ul li a").removeClass("img-action-active");
  });

  $(".three-dots").click(function () {
    $(this).parent().toggleClass("admires-profile-setting-active");
    $(".admires-popup-wrapper").toggleClass("popup_overlay_admire");
  });
  $(".admires-close-btn").click(function () {
    $(".admires-popup-wrapper").removeClass("popup_overlay_admire");
    $(".admires-profile").removeClass("admires-profile-setting-active");
  });

  $(".replace-profile-with").click(function () {
    $("body .popup_overlay").remove();
    $(".admires-popup-wrapper").removeClass("admires_active");
    $("body").css("overflow", "visible");
    $(".admires-popup-wrapper").removeClass("popup_overlay_admire");
    $(".admires-profile").removeClass("admires-profile-setting-active");
  });

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".speakers-search-list li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    if (value == "") {
      $(".speakers-search-list li").css("display", "none");
    }
  });

  (function () {
    var rotate, timeline;
    rotate = function () {
      return $(".card:first-child")
        .fadeOut(400, "swing", function () {
          return $(".card:first-child")
            .appendTo(".hero-band .header-right-img-slider")
            .hide();
        })
        .fadeIn(400, "swing");
    };
    timeline = setInterval(rotate, 3000);
    $("body").hover(function () {
      return clearInterval(timeline);
    });
    $(".card").click(function () {
      return rotate();
    });
  }.call(this));

  setTimeout(function () {
    $(".password-icon1").click(function () {
      $(this).toggleClass("fa-eye");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }, 1000);
});
