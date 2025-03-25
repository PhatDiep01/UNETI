jQuery(function ($) {
  "use strict";

  /*****************************
   * Commons Variables
   *****************************/
  var $window = $(window),
    $body = $("body");

  /*****************************
   * Off Canvas Function
   *****************************/
  (function () {
    var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
    $offCanvasToggle.on("click", function (e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr("href");
      $body.addClass("offcanvas-open");
      $($target).addClass("offcanvas-open");
      $offCanvasOverlay.fadeIn();
      if ($this.parent().hasClass("mobile-menu-toggle")) {
        $this.addClass("close");
      }
    });
    $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
      e.preventDefault();
      $body.removeClass("offcanvas-open");
      $offCanvas.removeClass("offcanvas-open");
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find("a").removeClass("close");
    });
  })();

  /**************************
   * Offcanvas: Menu Content
   **************************/
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".mobile-sub-menu");

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu
      .parent()
      .prepend('<div class="offcanvas-menu-expand"></div>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, .offcanvas-menu-expand", function (e) {
      var $this = $(this);
      if (
        $this.attr("href") === "#" ||
        $this.hasClass("offcanvas-menu-expand")
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu();
  if ($("#back-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }
});
// function showForm() {
//   var element = document.getElementById("form-search");
//   element.classList.toggle("show");
// }
function showForm() {
  var form = document.getElementById("form-search");
  var icon = document.getElementById("search-icon");

  form.classList.toggle("show");

  if (form.classList.contains("show")) {
    icon.classList.remove("fa-magnifying-glass");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-magnifying-glass");
  }
}
function showForm2() {
  var element = document.getElementById("form-search2");
  element.classList.toggle("show");
}

$(document).ready(function () {
  $(".lb-upload").click(function () {
    $("#FileAttack").click();
  });
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
// document.querySelector(".menu-toggle").addEventListener("click", function () {
//   document.querySelector(".menu").classList.toggle("active");
// });
