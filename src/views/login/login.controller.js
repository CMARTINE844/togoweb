(function () {
    'use strict';

    angular
        .module('focus-track')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$mdToast', '$localStorage', '$http'];
    function LoginController($state, $mdToast, $localStorage, $http) {
        var vm = this;
        vm.loginForm = {
            user: '',
            password: ''
        };

        vm.login = login;

        activate();

        ////////////////

        function activate() {
            console.log('Login\'s view: ', vm);
        }

        function login($form) {

            $http
                .get('')
                .then(function (response) {
                    console.log('Token obtenido correctamente.');
                    $localStorage.authorizationData = {};
                    $localStorage.authorizationData.token = response.data['access_token'];
                    $localStorage.authorizationData.username = $form.user;
                    $localStorage.authorizationData.password = $form.password;

                    var url = 'https://focusproxy.herokuapp.com/services/apexrest/Accesar?codigoagente=' + $form.user + '&password=' + $form.password;
                    $http
                        .get(url)
                        .then(function (response) {
                            console.log(response);
                            if(response.data.exito){
                              $state.go('project', vm.loginForm);
                            }else{
                              $mdToast.show(
                                  $mdToast.simple()
                                      .textContent('Usuario ó contraseña incorrectos')
                                      .position('top right')
                              );
                            }
                        })
                        .catch(function (response) {
                            $mdToast.show(
                                $mdToast.simple()
                                    .textContent('Usuario ó contraseña incorrectos')
                                    .position('top right')
                            );
                        });
                })
                .catch(function (response) {
                    console.log('Falló la petición del token.');
                });


        }

    }
})();
