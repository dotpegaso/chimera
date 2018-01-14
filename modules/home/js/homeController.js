angular.module('home', [])

<<<<<<< HEAD
.controller('homeController', function($scope, $location, $anchorScroll){
    
    $scope.email = "contato@chimeramedia.com.br";
=======
.controller('homeController', function($scope){
    
    $scope.email = "email@chimera.com.br";
>>>>>>> b117f2345bc94ef2cd136776f0951e89e4c3b63c
    
    $scope.parceiros = [
        {
            img: '/res/parceiros/hrtbox.png',
            link: 'https://hrtbox.com.br'
<<<<<<< HEAD
=======
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
        },
        {
            img:'/res/temp/partner.png',
            link: '#'
>>>>>>> b117f2345bc94ef2cd136776f0951e89e4c3b63c
        }
    ]
    
    $scope.listaEventos = [
        {
<<<<<<< HEAD
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
    
=======
            nome: 'Evento bacan',
            data: '12/06',
            local: 'local tralala trala, 16 SP',
            link: 'dotpegaso.com.br'
        },
        {
            nome: 'Evento bacana também',
            data: '22/09',
            local: 'local tralala trala, 16 SP',
            link: 'dotpegaso.com.br'
        },
        {
            nome: 'Evento bacan denovo',
            data: '07/11',
            local: 'local tralala trala, 16 SP',
            link: 'dotpegaso.com.br'
        },
        {
            nome: 'Evento bacan',
            data: '12/06',
            local: 'local tralala trala, 16 SP',
            link: 'dotpegaso.com.br'
        },
        {
            nome: 'Evento bacana também',
            data: '22/09',
            local: 'local tralala trala, 16 SP',
            link: 'dotpegaso.com.br'
        },
        
    ]
    
>>>>>>> b117f2345bc94ef2cd136776f0951e89e4c3b63c
})