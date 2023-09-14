// const dolphins = {
//     score1: 96,
//     score2: 108,
//     score3: 89
// }
// const koalas = {
//         score1: 88,
//         score2: 91,
//         score3: 110
//     }
const dolphins = {
    score1: 97,
    score2: 112,
    score3: 101
}
const koalas = {
        score1: 109,
        score2: 95,
        score3: 123
    }
    // const dolphins = {
    //     score1: 97,
    //     score2: 112,
    //     score3: 801
    // }
    // const koalas = {
    //     score1: 109,
    //     score2: 95,
    //     score3: 106
    // }

function average(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

const averageOfDolphins = average(dolphins.score1, dolphins.score2, dolphins.score3).toFixed(2)
const averageOfKoalas = average(koalas.score1, koalas.score2, koalas.score3).toFixed(2)

//Task 1
console.log('Task 1')
console.log('Average score of Dolphins: ' + averageOfDolphins)
console.log('Average score of Koalas: ' + averageOfKoalas)

//Task 2
console.log('Task 2')
if (averageOfDolphins > averageOfKoalas)
    console.log('Dophins is the winner')
else if (averageOfKoalas > averageOfDolphins)
    console.log('Koalas is the winner')
else
    console.log('Draw')

//Task 3 & 4
console.log('Task 3 & 4')

if (averageOfDolphins > averageOfKoalas && averageOfDolphins >= 100)
    console.log('Dophins is the winner')
else if (averageOfKoalas > averageOfDolphins && averageOfKoalas >= 100)
    console.log('Koalas is the winner')
else if (averageOfKoalas == averageOfDolphins && averageOfDolphins >= 100)
    console.log('Draw')
else
    console.log("No team wins the trophy")