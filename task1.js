//Выполнение данной задачи заняло 12минут (из которых половина ушла на рефакторинг и написание проверок)

arrCitiesBelarus = ['Гродно', 'Гомель', 'Могилев', 'Минск', 'Солигорск'];
arrCitiesRussia = ['Москва', 'Петербург', 'Сочи', 'Краснодар'];
arrCitiesGermany = ['Берлин', 'Мюнхен', 'Франкфурт'];
noCities = 123;
arrEmpty = [];

let result = '';
const msgArrEmpty =  'Пустой массив';
const noArr = 'Не массив. На вход должен приниматся массив';

function outputCitiesInString(arr){
	if(Array.isArray(arr)){
		(arr.length === 0) ?  result = msgArrEmpty : result = arr.join(', ') + '.';
	}else {
		result = noArr;
	}

	return result;
}

console.log(outputCitiesInString(arrCitiesBelarus));
console.log(outputCitiesInString(arrCitiesRussia));
console.log(outputCitiesInString(arrCitiesGermany));
console.log(outputCitiesInString(noCities));
console.log(outputCitiesInString(arrEmpty));