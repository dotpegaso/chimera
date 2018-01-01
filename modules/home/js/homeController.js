angular.module('home', [])

.controller('homeController', function($scope){
    
    $scope.email = "email@chimera.com.br";
    
    $scope.parceiros = [
        {
            img: '/res/parceiros/hrtbox.png',
            link: 'https://hrtbox.com.br'
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
        }
    ]
    
    $scope.listaEventos = [
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
    
})