//Выполнение задания заняло 14 минуты + рефакторинг

let countDivisor = 2; //Так как число изначально делиться уже на 1 и на само себя
let result = '';
const ERR_MSG = 'Число не является целым или не является числом';

function isPrimeNumber(number){

	if(Number.isInteger(number)){
		for(let divisor = Math.round(number / 2); divisor >= 2; divisor--){
			if(number % divisor === 0) countDivisor++;
		}
		(countDivisor !== 2) ? result = `Число ${number} не является простым числом` : result = `Число ${number} является простым числом`
	}else{
		result = ERR_MSG;
	}

	return result;
}

console.log(isPrimeNumber(7))