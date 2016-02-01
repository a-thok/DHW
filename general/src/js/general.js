$(function() {
  // 顶栏弹出框
  $(".nav_wrap_site_navigation_drop").parent().mouseover(function() {
    var elem = $(this).find(".nav_wrap_site_navigation_drop");
    elem.css({
      "position" : "absolute",
      "height" : "32px",
      "z-index" : "101",
      "background-color" : "#fff",
      "color" : "#666"
    });
    if (elem.is(".iconfont")) {
      elem.css({
        "border-left" : "1px solid #ccc",
        "border-right" : "1px solid #ccc"
      });
    }
    $(this).find(".nav_wrap_site_navigation_down").show();
  }).mouseout(function() {
    var elem = $(this).find(".nav_wrap_site_navigation_drop");
    elem.css({
      "position" : "relative",
      "background-color" : "transparent",
      "color" : "#a5a5a5"
    });
    if (elem.is(".iconfont")) {
      elem.css({
         "border-left" : "1px solid transparent",
         "border-right" : "1px solid transparent"
      });
    }
    $(this).find(".nav_wrap_site_navigation_down").hide();
  })
})