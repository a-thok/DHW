export default function btnSubmit() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp formGourp--submit clearfix">
          <input class="formBtn formBtn--submit" type="submit" value="提交"
            ng-disabled="${attrs.form}.$invalid"
          >
        </div>
      `
    }
  };
}