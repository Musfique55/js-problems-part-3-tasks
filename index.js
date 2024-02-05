// task 1
// Find the friend with the smallest name.

const heights = ['rahim','robin','rafi','ron','rashed'];
function smallBoy(name){
    let smaller = name[0];
    for(let n of name){
        if(n < smaller){
            smaller = n;
        }
    }
    return smaller;
}
console.log(smallBoy(heights));


// task-2
// match given string with given search option if both them match return true else false.


function matchFinder(string,find){

    if(typeof string !== 'string' || typeof find !== 'string'){
        return 'put only words';
    }
    if(string.includes(find)){
        return true;
    }else{
        return false;
    }
}
console.log(matchFinder('john','ohn'));


// task-3
// sortout given array with following options suppose array[1,2] compare them if 1 less than 2 then output should be [2,1] if [1,2] then output should be [1,2] if both of the number is same than return "equal" else not "input not valid"

const arr = [4,1];
function sortMaker(array){
    const [a,b] = array;

    if(a<0 || b<0){
        return 'invalid input';
    } else if(a>b){
        return [a,b];
    }else if(a<b){
        return [b,a];
    }else{
        return 'equal';
    }
}
console.log(sortMaker(arr));


// task-4
// make a function which can compare array price sum with cost if array sum is greater or equal to cost return true else false and if the array get anything without number return "please send money for buy chips"

const tk = [1,4,5];
function canPay(array,number){
    if(array.length === 0){
        return 'please send money for buy chips'
    }
    let sum = 0;
    for(const arr of array){
        sum += arr;
    }
    if(sum >= number){
        return true;
    }else{
        return false;
    }

}
console.log(canPay(tk,10));