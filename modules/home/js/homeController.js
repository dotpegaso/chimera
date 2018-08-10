angular.module('home', [])

.controller('homeController', function($scope, $location, $anchorScroll){
    
    $scope.email = "contato@chimeramedia.com.br";
    
    $scope.parceiros = [
        {
            img: '/res/parceiros/hrtbox.png',
            link: 'https://hrtbox.com.br'
        },
        {
            img: '/res/parceiros/blank.png',
            link: 'mailto:' + $scope.email + '?subject=Parceria'
        },
        {
            img: '/res/parceiros/blank.png',
            link: 'mailto:' + $scope.email + '?subject=Parceria'
        },
        {
            img: '/res/parceiros/blank.png',
            link: 'mailto:' + $scope.email + '?subject=Parceria'
        },
        {
            img: '/res/parceiros/blank.png',
            link: 'mailto:' + $scope.email + '?subject=Parceria'
        }
    ]
    
    $scope.listaEventos = [
        {
            nome: 'MAMAMOO',
            data: '07 DE SET 2018',
            local: 'FORTALEZA',
            link: 'https://ticketbrasil.com.br/show/6312-mamamoo-fortaleza-ce/'
        },
        {
            nome: 'MAMAMOO',
            data: '09 DE SET 2018',
            local: 'SÃO PAULO',
            link: 'https://ticketbrasil.com.br/show/6309-mamamoo-saopaulo-sp/'
        },
        
    ]
    
    $scope.scroll = function(elem) {
       var id = $location.hash();
        $location.hash(elem);
        $anchorScroll();
        $location.hash(id);
     };
    
})