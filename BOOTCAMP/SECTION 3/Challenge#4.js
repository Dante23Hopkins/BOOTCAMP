for (let i = 0; i < bills.length; i++) {
    const tip= calcTip(bills[1]);
    tips.push(tips);
    totals.push(tip + bills[i]);

}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
console.log(calcAverage)([2, 3, 7]); 
console.log(calcAverage)(totals);
console.log(calcAverage)(tips);