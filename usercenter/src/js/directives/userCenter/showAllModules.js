export default function showAllModules() {
  return {
    link: function (scope, elem) {
      let list = elem.find('.ucNav_list_item--all_list');
      elem.hover(function () {
        list.stop(false, false)
          .slideDown('fast');
      }, function () {
        list.stop(false, false)
          .slideUp('fast');
      });
    }
  };
}