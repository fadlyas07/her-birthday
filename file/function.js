(function ($) {
  $.fn.typewriter = function () {
    return this.each(function () {
      var element = $(this);
      var content = element.html();
      var progress = 0;

      element.html("");

      var timer = window.setInterval(
        function () {
          var current =
            content.substr(progress, 1);

          if (current === "<") {
            progress =
              content.indexOf(
                ">",
                progress
              ) + 1;
          } else {
            progress += 1;
          }

          element.html(
            content.substring(
              0,
              progress
            ) +
            (
              progress & 1
                ? "_"
                : ""
            )
          );

          if (
            progress >= content.length
          ) {
            window.clearInterval(timer);
            element.html(content);
          }
        },
        55
      );
    });
  };
})(jQuery);
