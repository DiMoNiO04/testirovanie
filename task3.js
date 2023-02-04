//Выполнение задания заняло 22 минуты

const errorMessage = 'Не является числом или число отрицательное или число не является целым'
let result = '';

function wordInCase(number){

	if(Number(number) && number >= 0 && Number.isInteger(number)){
		if((number === 1) || (number % 10 === 1 && number > 20)) result = number + ' компьютер'
		if((number >= 5 && number <= 20) || (number%10 >= 5) || (number%10 === 0))result = number + ' компьютеров'
		if((number < 5 && number % 10 < 5) || (number > 20 && number % 10 < 5)) result = number + ' компьютера';
	}
	else result = errorMessage;

	return result;
}

console.log(wordInCase(22))
console.log(wordInCase(41))
console.log(wordInCase(1))
console.log(wordInCase(1048))
console.log(wordInCase(1048.9))
