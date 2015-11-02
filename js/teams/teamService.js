var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    // service code
    
    this.addNewGame = function(gameObj){
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
        if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
            gameObj.won = true;
        } else {
            gameObj.won = false;
        }
        return $http({
            method: 'POST',
            url: url,
            data: gameObj
        });
    };
    
    
    
    
    
    
    
    
    
    
    
    

});