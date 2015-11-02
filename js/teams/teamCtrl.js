var app = angular.module('nbaRoutes');

// this controller needs to be injected the resolved data from the router
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

    // controller code
    
    $scope.test = 'hello!!!'
    
    $scope.teamData = teamData;

    $scope.newGame = {
        homeTeam: $scope.homeTeam.split(' ').join('').toLowerCase()
    };

    $scope.showNewGameForm = false;

    $scope.toggleNewGameForm = function () {
        $scope.showNewGameForm = !$scope.showNewGameForm;
    }

    if ($stateParams.team === 'utahjazz') {
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    } else if ($stateParams.team === 'losangeleslakers') {
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    } else if ($stateParams.team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }

    $scope.submitGame = function () {
        teamService.addNewGame($scope.newGame).then(function () {
            teamService.getTeamData($scope.newGame.homeTeam).then(function (data) {
                console.log(data);
                $scope.teamData = data;
                $scope.newGame = {};
                $scope.showNewGameForm = false;
            })
        })

    };





});