angular.module('home', [])

.controller('homeController', function($scope){
    
    $scope.email = "email@chimera.com.br";
    
    $scope.parceiros = [
        '/res/temp/partner1.png',
        '/res/temp/partner2.png',
        '/res/temp/partner3.png',
        '/res/temp/partner4.png',
        '/res/temp/partner5.png',
        '/res/temp/partner6.png',
        '/res/temp/partner7.png',
        '/res/temp/partner8.png',
        '/res/temp/partner9.png',
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