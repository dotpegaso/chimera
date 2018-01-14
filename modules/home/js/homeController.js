angular.module('home', [])

.controller('homeController', function($scope, $location, $anchorScroll){
    
    $scope.email = "contato@chimeramedia.com.br";
    
    $scope.parceiros = [
        {
            img: '/res/parceiros/hrtbox.png',
            link: 'https://hrtbox.com.br'
        }
    ]
    
    $scope.listaEventos = [
        {
            nome: 'SAVE THE DATE',
            data: 'MARÇO',
            local: 'Em breve',
            link: ''
        }
    ]
    
    $scope.scroll = function(elem) {
       var id = $location.hash();
        $location.hash(elem);
        $anchorScroll();
        $location.hash(id);
     };
    
})