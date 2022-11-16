// Our football team has finished the championship. Our team's match results are
// recorded in a collection of strings. Each match is represented by a string in
// the format "x:y", where x is our team's score and y is our opponent's score.
// for example: ['3:1', '2:2']Points are awarded for each match as thus:
// if x > y: 3 points(win), if x < y: 0 points(loss)
// if x = y: 1 points(tie)
// We need to write a function that takes this collection and
//returns the total number of points our team (x)got in the championship 
                    // SOLUTION
const points = games => games.reduce((sum, [x, ,y]) => sum + (x > y ?  3 : x === y), 0)
alert(points(['3:4', '5:2', '3:3', '7:6']))

                    // OR
const points = games => games.reduce((sum, point) =>{
    return sum += point[0] > point[2] ? 3 : point[0] === point[2] ? 1 : 0
}, 0)
alert(points(['3:4', '5:2', '3:3', '7:6']))


























// Declare a function
function totalPoints(arr){
    // Declare a variable to hold the sum of the team's points
    let sum = 0
    // Check through the each string in the array
    for(let  i = 0; i < arr.length; i++){
        //compare the string values against each other & use the condition as stated above to get the output
        if(arr[i][0] > arr[i][2]){
            sum += 3
        }else if(arr[i][0] < arr[i][2]){
            sum += 0
        }else if(arr[i][0] === arr[i][2]){
            sum += 1
        }
    }
    return sum
}
alert(totalPoints(['3:2', '2:1', '2:3', '1:1']))














