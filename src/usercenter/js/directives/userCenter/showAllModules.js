export default function showAllModules() {
  return {
    link: function (scope, elem) {
      let list = elem.find('.ucNav_list_item--all_list');
      elem.hover(() => {
        list.stop(false, false)
          .slideDown('fast');
      }, () => {
        list.stop(false, false)
          .slideUp('fast');
      });
    }
  };
}