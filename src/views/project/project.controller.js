(function () {
    'use strict';

    angular
        .module('focus-track')
        .controller('ProjectController', ProjectController);

    ProjectController.$inject = ['$state', '$scope', '$filter', '$mdToast', '$stateParams', '$mdDialog', 'ProjectService', 'CategoryService', 'Logger', '$localStorage'];
    function ProjectController($state, $scope, $filter, $mdToast, $stateParams, $mdDialog, ProjectService, CategoryService, Logger, $localStorage) {
        var vm = this;

        vm.allowed = { minutes: [0, 15, 30, 45], hours: [] };
        for (var i = 0; i < 25; i++) {
            vm.allowed.hours.push(i);
        }
        vm.categories = [];

        vm.projects = [];
        vm.logs = [];
        vm.selectedProject = null;
        vm.params = $stateParams;
        vm.logForm = getCleanForm();

        vm.getLogs = getLogs;
        vm.addLog = addLog;
        vm.showAllLogs = showAllLogs;
        vm.closeModal = $mdDialog.hide;
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {
            getCategories();
            getProjects();
        }

        function getProjects(filter) {
            var filter = {
                codigoagente: $localStorage.authorizationData.username,
                activo: true
            };
            return ProjectService.get(filter).then(function (data) {
                vm.projects = data;
            })
        }

        function getLogs(project) {
            if (project) {
                var filter = {
                    codigoagente: $localStorage.authorizationData.username,
                    idproyecto: project.idProyecto,
                    rechazado: 0,
                    limite: 500
                };
                return Logger.get(filter).then(function (data) {
                    vm.logs = data;
                });
            }
        }

        function addLog(log) {
            if (!log || (log.horas === 0)) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Es necesario registrar al menos 1 hora')
                        .position('top right')
                );
                return;
            }
            // @todo
            var object = {
                reg: {
                    codigoagente: $localStorage.authorizationData.username,
                    idproyecto: vm.selectedProject.idProyecto,
                    horas: log.hours,
                    minutos: log.minutes,
                    fechatrabajo: moment(log.date).format('YYYY-MM-DD'),
                    categoria: log.category.code + ' - ' + log.category.name,
                    comentario: log.comment
                }
            };
            Logger.post(object)
                .then(function (data) {
                    // @todo Manejar toast de éxito
                    if (data.exito) {
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('Se ha registrado de forma exitosa el trabajo')
                                .position('top right')
                                .hideDelay(6000)
                        );
                        vm.logForm = getCleanForm();
                        getLogs(vm.selectedProject);
                    }
                    else {
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('Hubo un error al registrar el trabajo')
                                .position('top right')
                        );
                    }
                });
        }

        function getCleanForm() {
            return { date: $filter('date')(Date.now(), 'yyyy/MM/dd'), hours: 1, minutes: 0, comment: '', category: null };
        }

        function getCategories() {
            return CategoryService.get().then(function (data) {
                vm.categories = data;
            });
        }

        function logout() {
            $localStorage.$reset();
            $state.go('login', vm.loginForm);
        }

        function showAllLogs($event) {
            $mdDialog.show({
                preserveScope: true,
                scope: $scope,
                targetEvent: $event,
                templateUrl: './views/project/logs.modal.html'
            });
        }

    }
})();
