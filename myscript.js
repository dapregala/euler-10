
var primes = [];
var sum = 0;

for (var i = 2; i<=2000000; i++){
    console.log(i)
    if(isPrime(i, i)){
	sum = sum + i;
    }
}


function isPrime(number, maxLookUp){

    for(var i = 2; i <= maxLookUp; i++){
        if(number != i){
            if(number % i == 0){
                return false;
            }
        }
    
    }

    return true;
}
