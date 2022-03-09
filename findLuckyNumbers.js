// Write your code below this line.

let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function luckyNumbers(n) {
    const answers = []
    for (i = 0; i < n; i++) {
        
        let index = Math.ceil(Math.random() * possibleNumbers.length) - 1
        let myNum = possibleNumbers.splice(index, 1)
        console.log(possibleNumbers)
        answers.push(myNum[0])
}
    return answers
}



let newNumArray = luckyNumbers(10)


    console.log(newNumArray)