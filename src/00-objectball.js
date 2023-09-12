function gameObject(){
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals:2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0, 
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12, 
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}


//get points
    //HOME PLAYERS POINTS
// let homePlayers = Object.entries(gameObject().home.players)

// let homePlayersPoints = homePlayers.map(e => e[1].points)

//     //AWAY PLAYERS POINTS
// let awayPlayers = Object.entries(gameObject().away.players)

// let awayPlayersPoints = awayPlayers.map(e => e[1].points)

//     //ALL PLAYER POINTS
// let allPlayerPoints = homePlayersPoints.concat(awayPlayersPoints)




//Get Player Names
        //HOME PLAYER NAMES
let homePlayerName = Object.keys(gameObject().home.players)

        //AWAY PLAYER NAMES
let awayPlayerName = Object.keys(gameObject().away.players)

        //ALL PLAYER NAMES
let allPlayerNames = homePlayerName.concat(awayPlayerName)


//Get Team Names
    //HOME TEAM
let homeTeamName = gameObject().home.teamName

    //AWAY TEAM
let awayTeamName = gameObject().away.teamName


//Get Team Colours
    //HOME TEAM COLOURS
let homeTeamColours = gameObject().home.colors 

    //AWAY TEAM COLOURS
let awayTeamColours = gameObject().away.colors


//Get All Players Stats 
let teamInfo = Object.entries(gameObject())
//console.log(teamInfo)
let playerStats = teamInfo.map(info => info[1].players)
console.log(playerStats)

let mergedStats = playerStats.flatMap(obj => Object.values(obj));

//All Number
let allNumbers = mergedStats.map(info => info.number)

//All Shoes
let allShoes = mergedStats.map(info => info.shoe)

//All Points
let allPoints = mergedStats.map(info => info.points)

//All rebounds
let allRebounds = mergedStats.map(info => info.rebounds)

//All assists
let allAssists = mergedStats.map(info => info.assists)

//All steals
let allSteals = mergedStats.map(info => info.steals)

//All blocks
let allBlocks = mergedStats.map(info => info.blocks)

//All slamDunks
let allSlamDunks = mergedStats.map(info => info.slamDunks)

//FUNCTION SAYS THAT IF THE NAME ARG === ONE OF THE PLAYER NAMES THEN RETURN CORRESPONDING POINTS

//Build function, numPointsScored takes in argument of a player name and returns number of points scored for player.
function numPointsScored(playerName){
    for(let i = 0; i < allPoints.length; i++){
        if(playerName === allPlayerNames[i]){
            return allPoints[i]
        }
    }
}

//Build a function, shoeSize, takes in argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName){
    for(let i = 0; i < allPlayerNames.length; i++){
        if(playerName === allPlayerNames[i]){
            return allShoes[i]
        }
    }
}

//Build a function, teamColors, takes in an argument of the team name and returns array of that teams colors.
function teamColors(teamName){
    if(teamName === homeTeamName){
        return homeTeamColours
    } else if(teamName === awayTeamName){
        return awayTeamColours
    }
}

//Build function, teamNames, that operates on game object to return an array of the team names.
//Build function, playerNumbers, takes in an argument of team name and returns array of the jersey numbers for that team.
function playerNumbers(teamName){
    if(teamName === homeTeamName){
        return allNumbers.slice(0,5)
    } else if(teamName === awayTeamName){
        return allNumbers.slice(5)
    }
}
//Build a function, playerStats, that takes in an argument of a player's name and returns object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStatistics(playerName){
    for(let i = 0; i < allPlayerNames.length; i++){
        if(playerName === allPlayerNames[i]){
            return [allNumbers[i], allShoes[i], allPoints[i], allRebounds[i], allAssists[i], allSteals[i], allBlocks[i], allSlamDunks[i]]
        }
    }
}

//Build function, bigShoeRebounds, that return the number of rebounds associated with player with largest shoe size. 
    //First, find the player with the largest shoe size
    //Then, return that player's number of rebounds
function bigShoeRebounds(shoeSize){
    console.log(Math.max(allShoes))
}




