const walletApp = angular.module('wallet', ['ui.router', 'summernote', 'ngTagsInput', 'ui.ace']);


//
walletApp.config(($stateProvider, $urlRouterProvider) => {
    // Now set up the states
    $stateProvider.state('wallet', {
        url: "/wallet",
        templateUrl: "/views/home.html",
        controller: "WalletController"
    });

    $stateProvider.state('add-amount', {
        url: "/add-amount",
        templateUrl: "/views/add-wallet-amount.html",
        controller: "addAmountController"
    });

    $urlRouterProvider.otherwise("/wallet");
});


//
walletApp.run(($rootScope) => {

});


//
angular.element(document).ready(() => {

    // alert("Sdf");
    // if (window.location.hash === '#_=_') {
    //     window.location.hash = '#!'
    // }


    angular.bootstrap(document, ['wallet']);
});