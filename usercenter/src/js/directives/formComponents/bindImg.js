export default function bindImg() {
 return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        function bindImg() {
          var uploader = new plupload.Uploader({
            runtimes: 'flash',
            browse_button: element[0],
            container: element[0].id,
            url: dhw.imguploadurl + "?key=" + attr.keyname + "&t=" + attr.size,
            flash_swf_url: '/plupload.flash.swf',

            init: {
              FilesAdded: function (up, files) {
                uploader.start();
              },

              FileUploaded: function (up, file, info) {
                if (info.response != null) {
                  var jsonstr = eval("(" + info.response + ")");

                  var imgUrl = jsonstr.path + jsonstr.name;
                  scope.$apply(function () {
                    ctrl.$setViewValue(imgUrl);
                  });
                }
              },

              // Error: function (up, args) {
              //   if (args.file) {
              //     alert('[error] File:' + args.file);
              //   } else {
              //     alert('[error]' + args);
              //   }
              // }
            }
          });
          uploader.init();
        }
        setTimeout(function () {
          bindImg();
        });

      }
    };
}