
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope,$http) {  
        $scope.pixiv_put={works:[]};
        $http({
            method: 'get',
            url: 'http://www.moeccg.com:3000/get_bilibili_api'
        }).then(function successCallback(response) {
            $scope.bili_news = response.data;
        }, function errorCallback(response) {
            // error
        });
        $http({
            method: 'GET',
            url: 'http://163.44.168.179:3000/get_pixiv'
        }).then(function successCallback(response) {
            $scope.pixiv = response.data;
            for(var i=0;i<10;i++){
                $scope.pixiv_put.works.push($scope.pixiv.works[$scope.pixiv_put.works.length]);
            }
        }, function errorCallback(response) {
            // error
        });
        $http({
            method: 'GET',
            url: 'http://www.moeccg.com:3000/get_coshow'
        }).then(function successCallback(response) {
            $scope.coshow = response.data;
            console.log($scope.coshow);
        }, function errorCallback(response) {
            // error
        });
        $http({
            method: 'GET',
            url: 'http://www.moeccg.com:3000/get_acfun_api'
        }).then(function successCallback(response) {
            $scope.acfun = response.data;
            console.log($scope.acfun);
        }, function errorCallback(response) {
            // error
        });
        $http({
            method: 'GET',
            url: 'http://www.moeccg.com:3000/get_anime_list'
        }).then(function successCallback(response) {
            $scope.anime_list = response.data;
            console.log($scope.anime_list);
        }, function errorCallback(response) {
            // error
        });        
        $scope.getmore=function(){
            for(var i=0;i<10;i++){
                $scope.pixiv_put.works.push($scope.pixiv.works[$scope.pixiv_put.works.length]);
            }
            console.log($scope.pixiv_put);
        };
    });

    $(document).ready(function(){  
  var tabWrapper = $('#tab-block'),
      tabMnu = tabWrapper.find('.tab-mnu  li'),
      tabContent = tabWrapper.find('.tab-cont > .tab-pane');  
  tabContent.not(':first-child').hide();  
  tabMnu.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  tabContent.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });  
  tabMnu.click(function(){
    var tabData = $(this).data('tab');
    tabWrapper.find(tabContent).hide();
    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
  });  
  $('.tab-mnu > li').click(function(){
    var before = $('.tab-mnu li.active');
    before.removeClass('active');
    $(this).addClass('active');
   }); 
  $('.act_three .left_list li a').click(function(e){
      switch (e.target.innerText){
          case 'HOME':$('html,body').animate({scrollTop:'0px'},1000);break; 
          case '哔哩哔哩': $('html,body').animate({ scrollTop: $('.bilibili').offset().top }, 1000); break;
          case 'ACFUN文章': $('html,body').animate({ scrollTop: $('.acfun').offset().top }, 1000); break; 
          case 'PIXIV国际周榜':$('html,body').animate({scrollTop:$('.pixiv')[0].offsetTop+'px'},1000);break; 
          case '近期漫展':$('html,body').animate({scrollTop:''+$('.coshow')[0].offsetTop+'px'},1000);break; 
          default:break;
    };
  });   
});