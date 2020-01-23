walletApp.controller('WalletController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    console.log('hellllo');
    if ($('.home-p-c-b-slider').length == 1) {
    const typed_strings = $('.home-p-c-b-items').text();
        const typed = new Typed('.home-p-c-b-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }
}]);
