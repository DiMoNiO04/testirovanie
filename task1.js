//Выполнение данной задачи заняло 12минут (из которых половина ушла на рефакторинг и написание проверок)

arrCitiesBelarus = ['Гродно', 'Гомель', 'Могилев', 'Минск', 'Солигорск'];
arrCitiesRussia = ['Москва', 'Петербург', 'Сочи', 'Краснодар'];
arrCitiesGermany = ['Берлин', 'Мюнхен', 'Франкфурт'];
noCities = 123;
arrEmpty = [];

let result = '';
const MSG_ARR_EMPTY =  'Пустой массив';
const NO_ARR = 'Не массив. На вход должен приниматся массив';

function outputCitiesInString(arr){
	if(Array.isArray(arr)){
		(arr.length === 0) ?  result = MSG_ARR_EMPTY : result = arr.join(', ') + '.';
	}else {
		result = NO_ARR;
	}

	return result;
}

console.log(outputCitiesInString(arrCitiesBelarus));
console.log(outputCitiesInString(arrCitiesRussia));
console.log(outputCitiesInString(arrCitiesGermany));
console.log(outputCitiesInString(noCities));
console.log(outputCitiesInString(arrEmpty));