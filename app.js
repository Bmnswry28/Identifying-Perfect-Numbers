let PerfectNumbers = [];

function PerfectNumber(num){
    let sum=0;
    for (let i = 1; i<num; i++){
        if (num % i === 0){
            sum+= i;
        }
    }
    if(sum === num){
        PerfectNumbers.push(num);
    }
}
PerfectNumber(23);
PerfectNumber(6);
PerfectNumber(24);
PerfectNumber(61);
PerfectNumber(28);


console.log(PerfectNumbers);
