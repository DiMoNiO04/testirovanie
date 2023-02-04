//Выполнение данной задачи заняло 35 минут (из-за метода вывода по ТЗ) + рефакторинг

class MultiplicationTable{
	constructor(number){
		this.number = number;
	}

	getMutliplicationTable(number){
		let result = '';

		for(let multiplierFirst = 0; multiplierFirst <= number; multiplierFirst++){
			(multiplierFirst === 0) ? result += '  ' : result += multiplierFirst + '  '; 
		}

		for(let multiplierFirst = 1; multiplierFirst <= number ; multiplierFirst++){
			result += '\n' + multiplierFirst + ' ';
			for(let multiplierSecond = 1; multiplierSecond <= number; multiplierSecond++){
				if((String(multiplierFirst * multiplierSecond).length && String(multiplierFirst * (multiplierSecond + 1)).length) === 1){
					result += (multiplierFirst * multiplierSecond) + '  ';
				}else{
					result += (multiplierFirst * multiplierSecond) + ' ';
				}
			}
		}
		return result
	}
}

let number = new MultiplicationTable();
console.log(number.getMutliplicationTable(5))
