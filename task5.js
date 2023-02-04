//Выполнение задания заняло около часа, из-за того что не мог понять как сделать метод в методе, нашел только такой ход решения

class Repeat{
	constructor(arrFirst, arrSecond){
		this.arrFirst = arrFirst;
		this.arrSecond = arrSecond;
	}

	getRepeatElementsFromTwoArrs(arrFirst, arrSecond){
		function getRepeatElementForOneArr(arrFirst){
			let result = [];
			for(let i = 0; i < arrFirst.length; i++){
				for(let j = i+ 1; j < arrFirst.length; j++){
					if(arrFirst[i] === arrFirst[j] && !result.includes(arrFirst[i])){
						result.push(arrFirst[i])
					}
				}
			}
			return result;
		}

		function getRepeatElements(arrFirst, arrSecond){
			let result = []
			let newArrFirst = getRepeatElementForOneArr(arrFirst);
			let newArrSecond = getRepeatElementForOneArr(arrSecond);
		
			for(let i=0; i< newArrFirst.length; i++){
				for(let j=0; j<newArrSecond.length; j++){
					if(newArrFirst[i] === newArrSecond[j]){
						result.push(newArrFirst[i])
					}
				}
			}
			return result.sort();
		}

		return getRepeatElements(arrFirst, arrSecond)
	}
}


let firstArr = new Repeat([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]);
console.log(firstArr.getRepeatElementsFromTwoArrs([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))

let secondArr = new Repeat([7, 17, 1, 9, 1, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]);
console.log(secondArr.getRepeatElementsFromTwoArrs([7, 17, 1, 9, 1, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))

let thirdArr = new Repeat([7, 9, 1, 56, 56, 23], [56, 17, 17, 23, 34, 23, 1, 8, 1]);
console.log(thirdArr.getRepeatElementsFromTwoArrs([7, 9, 1, 56, 56, 23], [56, 17, 17, 23, 34, 23, 1, 8, 1]))

