(function ($) {
  $.fn.typewriter = function (options) {
    var settings = $.extend(
      {
        speed: 55,
        onComplete: null
      },
      options || {}
    );

    return this.each(function () {
      var element = $(this);
      var content = element.html();
      var progress = 0;

      element.html("");

      var timer = window.setInterval(function () {
        var current = content.substr(progress, 1);

        if (current === "<") {
          progress = content.indexOf(">", progress) + 1;
        } else {
          progress += 1;
        }

        element.html(
          content.substring(0, progress) +
            (progress < content.length && progress & 1 ? "_" : "")
        );

        if (progress >= content.length) {
          window.clearInterval(timer);
          element.html(content);

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(element[0]);
          }
        }
      }, settings.speed);
    });
  };
})(jQuery);

function timeElapse(date) {
  var current = Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));

  seconds = seconds % (3600 * 24);

  var hours = Math.floor(seconds / 3600);

  seconds = seconds % 3600;

  var minutes = Math.floor(seconds / 60);

  $("#clock").html(
    "Days " +
      days +
      " Hours " +
      String(hours).padStart(2, "0") +
      " Minutes " +
      String(minutes).padStart(2, "0")
  );
}

