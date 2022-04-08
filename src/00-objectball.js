let team = ["Brooklyn Nets", "Black", "White", "Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1, "Reggie Evans",30,14,12,12,12,12,12,7, "Brook Lopez", 11, 17, 17, 19, 10, 3, 1, 15, "Mason Plumlee", 1, 19,26,12,6,3,8,5, "Jason Terry", 31,15,19,2,2,4,11,1]
let bteam = ["Charlotte Hornets", "Turquoise", "Purple", "Jeff Adrien", 4, 18, 10, 1, 1, 2, 7, 2, "Bismak Biyombo", 0, 16, 12, 4, 7, 7, 15, 10, "DeSagna Diop", 2, 14, 24, 12, 12, 4, 5, 5, "Ben Gordon", 8, 15, 33, 3, 2, 1, 1, 0, "Brendan Haywood", 33, 15, 6, 12, 12, 22, 5, 12]

let gameObject = () => {
    let home = {}
    home["teamName"]=team[0];
    home["colors"]=[team[1], team[2]];
    home["players"]={};
    for(let i = 0 ; i < 5 ; i++){
        home.players[team[3 + 9*i]]={
            number : team[4 + 9*i],
            shoe : team[5 + 9*i],
            points : team[6 + 9*i],
            rebounds : team[7 + 9*i],
            assits : team[8 + 9*i],
            steals : team[9 + 9*i],
            blocks : team[10 + 9*i],
            slamDunks : team[11 + 9*i],
        }
    }

    let away = {}
    away["teamName"]=bteam[0];
    away["colors"]=[bteam[1], bteam[2]];
    away["players"]={};
    for(let i = 0 ; i < 5 ; i++){
        away.players[bteam[3 + 9*i]]={
            number : bteam[4 + 9*i],
            shoe : bteam[5 + 9*i],
            points : bteam[6 + 9*i],
            rebounds : bteam[7 + 9*i],
            assits : bteam[8 + 9*i],
            steals : bteam[9 + 9*i],
            blocks : bteam[10 + 9*i],
            slamDunks : bteam[11 + 9*i],
        }
    }
    return {home, away};
}

const homeTeamName = () => {
    return gameObject()['home']['teamName']
}
const numPointsScored = (playerName) => {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return `${playerName} scored ${players[playerName].points} points`
}
const shoeSize = (playerName) =>{
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return `${playerName} shoe size is ${players[playerName].shoe}`
}
const teamColors = (teamName) =>{
    let game = gameObject()
    for (const key in game) {
        let team = game[key]
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}
const teamNames = () => {
    let teams = [gameObject()['home']['teamName'], gameObject()['away']['teamName']]
    return teams
}
const playerNumbers = (teamName) =>{
    let game = gameObject()
    let numbers = []
    for (const key in game) {
        let team = game[key]
        if (team.teamName === teamName) {
            for (const player in team.players) {
                numbers.push(team.players[player].number)
            }
        }
    }
    return numbers;
}
const playerStats = (playerName) => {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return players[playerName]
}

const bigShoeRebounds = () => {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let biggestShoe = 0, playerbiggestShoe = '';

    for (const player in players) {
        if (players[player].shoe > biggestShoe) {
            biggestShoe = players[player].shoe
            playerbiggestShoe = player
        }
    }
    return `${playerbiggestShoe} with shoe size ${biggestShoe} has ${players[playerbiggestShoe].rebounds} rebounds`
}

const mostPointsScored = () => {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let mostPoints = 0, bestPlayer = '';

    for (const player in players) {
        if (players[player].points > mostPoints) {
            mostPoints = players[player].points
            bestPlayer = player
        }
    }

    return `${bestPlayer} has ${mostPoints} points!`
}
const winningTeam = () => {
    let game = gameObject()
    let winningPoints = 0, totalPoints=0, winTeam = ''
    for (const key in game) {
        let team = game[key]
        for (const player in team.players) {
            totalPoints += team.players[player].points
        }
        if (totalPoints > winningPoints) {
            winningPoints = totalPoints
            winTeam = team.teamName
        }
        totalPoints = 0;
    }
    return winTeam
}
const playerWithLongestName = () => {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let longName = ''
    for (const player in players) {
        if (player.length > longName.length) {
            longName = player
        }
    }
    return longName
}
const doesLongNameStealATon = () => {
    let longName = playerWithLongestName();
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let mostSteals = 0, stealer;
    for (const player in players) {
        if (players[player].steals > mostSteals) {
            mostSteals = players[player].steals
            stealer = player;
        }
    }
    return longName === stealer ? true : false;
}
console.log(doesLongNameStealATon())


/*

This is the structure needed for the gameObject.

let testGameObject={
    home : {
        teamName : "",
        colors : [],
        players : {
            name : {
                number: "",
                shoe : "",
                points : "",
                rebounds : "",
                assits : "",
                steals : "",
                blocks : "",
                slamDunks : ""
            }
        }
    },
    away : {
        teamName : "",
        colors : [],
        players : {
            name : {
                number: "",
                shoe : "",
                points : "",
                rebounds : "",
                assits : "",
                steals : "",
                blocks : "",
                slamDunks : ""
            }
        }
    }
}*/