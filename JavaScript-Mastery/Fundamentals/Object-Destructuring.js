let team = {
    captain: "babar",
    keeper: "rizwan",
    coach: "mickey",
    bowler: "shaheen",
}

console.log(team);

const teamCaptain = team["captain"];
console.log(teamCaptain);
const teamCoach = team.coach;
console.log(teamCoach);

const {keeper:wicketKeeper, player2} = team;
console.log(wicketKeeper);