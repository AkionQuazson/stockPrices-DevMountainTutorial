const best = (stocks) => {
    let largestDifference = 0;
    let lowestSeen = stocks[0];

    for (let i = 0; i < stocks.length; i++) {
        const currentDifference = stocks[i] - lowestSeen;
        if (stocks[i] < lowestSeen) {
            lowestSeen = stocks[i];
        }
        else if(currentDifference > largestDifference) {
            largestDifference = currentDifference;
        }
    }

    return largestDifference;
}

console.log(best([1, 2, 3, 4, 5]))

console.log(best([2, 3, 10, 6, 4, 8, 1]))

console.log(best([7, 9, 5, 6, 3, 2]))

console.log(best([0, 100]))

console.log(best([5, 4 , 3, 2, 1]))

console.log(best([100]))

console.log(best([100, 0]))
