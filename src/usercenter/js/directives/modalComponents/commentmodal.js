import $ from 'jquery';
export default function commentmodal() {
  return {
    scope: true,
    replace: true,
    template: function (elem, attrs) {
      return `
       <form name="replayForm">
        <div class="comment_modal" ng-show="${attrs.vm}.isshow">
          <div class="comment_bg"></div>
          <div class="comment_area">
            <div class="comment_title clearfix">
                <span class="title_name">职位评价</span>
                <span class="comment_close" style="cursor:pointer" ng-click="${attrs.vm}.${attrs.close}"></span>
            </div>
            <div class="comment_operate">
              <div class="comment_col clearfix">
                <label for="" class="comment_label">职位信息 :</label>
                <div class="comment_content">
                  <p style="
    width: 374px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: -webkit-baseline-middle;
    height: 24px;
    line-height: 24px;
">
                    <span class="comment_jobtitle">{{ ${attrs.vm}.data.${attrs.jobname} }}</span>/<span class="comment_comyname">{{ ${attrs.vm}.data.${attrs.comyname} }}</span>
                  </p>
                  <p class="comment_salarypart">
                    <span class="comment_salary">薪酬：</span><span class="comment_salary">2k-5k</span>
                  </p>
                </div>
              </div>
                <div class="comment_col coment_col_pf clearfix">
                  <label for="" class="comment_label">评分:</label>
                  <ul class="comment_content">
                    <li>
                      <span class="comment_totalscole">综合评分</span>
                      <div class="stars starone">
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                      </div>
                    </li>
                    <li>
                      <span class="comment_totalscole">描述相符</span>
                      <div class="stars startwo">
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                      </div>
                    </li>
                    <li>
                      <span class="comment_totalscole">面试评分</span>
                      <div class="stars starthree">
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                      </div>
                    </li>
                    <li class="last">
                      <span class="comment_totalscole">环境评分</span>
                      <div class="stars startfour">
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                        <i class="star"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="comment_col coment_col_pj clearfix">
                  <label for="" class="comment_label">评价内容 :</label>
                  <div class="comment_content">
                    <textarea name="" id="" cols="30" rows="10" ng-model="${attrs.vm}.data.${attrs.about}" required></textarea>
                  </div>
                </div>
                <div class="comment_btn">
                    <button type="button" class="btn formBtn--submit" ng-click="${attrs.vm}.${attrs.postcomment}" ng-disabled="replayForm.$invalid">发布评论</button>
                </div>
              </div>
            </div>
          </div>
         </form>
      `;
    },
    controller: ['$scope', '$attrs', function ($scope, $attrs) {
      $('.starone .star').on('click', function() {
        var currentindex = $(this).index();
        $scope.$parent[$attrs.vm].para.star1 = currentindex;
         $('.starone .star').each(function (index, element) {
          $(element).removeClass('star-5'); 
          if (currentindex >= index) {
            $(element).addClass('star-5');
          }
        });
      });  
      $('.startwo .star').on('click', function () {
        var currentindex = $(this).index();
        $scope.$parent[$attrs.vm].para.star2 = currentindex;
         $('.startwo .star').each(function (index, element) {
          $(element).removeClass('star-5'); 
          if (currentindex >= index) {
            $(element).addClass('star-5');
          }
        });
      });   
      $('.starthree .star').on('click', function () {
        var currentindex = $(this).index();
         $scope.$parent[$attrs.vm].para.star3 = currentindex;
         $('.starthree .star').each(function (index, element) {
          $(element).removeClass('star-5'); 
          if (currentindex >= index) {
            $(element).addClass('star-5');
          }
        });
      });  
      $('.startfour .star').on('click', function () {
        var currentindex = $(this).index();
         $scope.$parent[$attrs.vm].para.star4 = currentindex;
         $('.startfour .star').each(function (index, element) {
          $(element).removeClass('star-5'); 
          if (currentindex >= index) {
            $(element).addClass('star-5');
          }
        });
      });
    }],
    controllerAs: 'vm'
  };
}
