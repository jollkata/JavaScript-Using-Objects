$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
	fifthProblem();
	sixthProblem();
});

//Problem 1
function  firstProblem(){
	console.log('Problem 1. Planar coordinates');
	function point(x, y){
		return {
			x: x,
			y: y
		};
	}
	function lines(p1, p2){
		return {
			p1: p1,
			p2: p2
		};
	}
	function lineDistance(p1,p2){
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y;
		var distance = Math.sqrt(dx * dx + dy * dy);
		return distance;
	}
	function isTriangle (line1, line2, line3){
		var side1 = line1.length;
		var side2 = line2.length;
		var side3 = line3.length;

		var side1_check = side1 < (side2 + side3);
		var side2_check = side2 < (side1 + side3);
		var side3_check = side3 < (side2 + side3);

		return side1_check && side2_check && side3_check;
	}
	var p1 = point(2,3),
		p2 = point(7,8),
		p3 = point(5,6),
		p4 = point(2,8),
		l1 = lines(p1,p2),
		l2 = lines(p2,p3),
		l3 = lines(p3,p4),
		lineDist1 = lineDistance(p1,p2),
		lineDist2 = lineDistance(p2,p3),
		lineDist3 = lineDistance(p3,p4);
	console.log('\tThe length of a line represented by point 1: (2, 3) and point 2: (7, 8) id -->' + lineDist1);
	console.log('\tThe length of a line represented by point 1: (7, 8) and point 2: (5, 6) id -->' + lineDist2);
	console.log('\tThe length of a line represented by point 1: (5, 6) and point 2: (2, 8) id -->' + lineDist3);
	console.log('\tCan form a triangle these three lines? '+ isTriangle(lineDist1,lineDist2,lineDist3));
};// end of function

//Problem 2
function  secondProblem(){
	console.log('\nProblem 2. Remove elements');
	var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'],
		i,
		len = arr.length;
		
	Array.prototype.remove = function(elm){
		for(i = 0; i < len; i += 1){
			if(this[i] === elm){
				this.splice(i, 1);
				i -= 1;
				len -= 1;
			}
		}
	}
	arr.remove(1);
	console.log('\tRemove all "1" from the array [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"] ---> [' + arr.join(', ') + ']');
};// end of function

//Problem 3
function  thirdProblem(){
	console.log('\nProblem 3. Deep Copy');
	var obj = {
			name: 'John',
			age: 26,
			job: 'Technical support'
		},
		prop,
		result;

	function deepCopy(copyObj){
		if(typeof(copyObj) !== 'object'){
			result = 'This is not an object!';
			return result;
		}
		result = {};
		for(prop in copyObj){
			result[prop] = copyObj[prop];
		}
		return result;
	}

	var objCopy = deepCopy(obj);
	console.log('\tThe copied object is:');
	console.log(objCopy);
};// end of function

//Problem 4
function  fourthProblem(){
	console.log('\nProblem 4. Has property');
	var obj = {
			name: 'John',
			age: 26,
			job: 'Technical support'
		},
		item;
		
	var hasProp = hasProperty(obj, 'country');
	console.log('\t' + hasProp);
	
	function hasProperty(obj, prop){
		for(item in obj){
			if(item === prop) {
				return 'The property ' + prop + ' has value ' + obj[prop];
			}
		}
		return 'The object does not contain the property ' + prop;
	};
};// end of function

//Problem 5
function  fifthProblem(){
	console.log('\nProblem 5. Youngest person');
	var firstPerson, secondPerson, thirdPerson,
		people = [],
		i, len, youngest;
		
	firstPerson = person('Peter', 'Petrov', 10);
	secondPerson = person('Eva', 'Nikolova', 40);
	thirdPerson = person('Nikola', 'Penchev', 27);
	people = [firstPerson, secondPerson, thirdPerson];
	len = people.length;
	
	function theYoungest(){
		for(i = 0; i < len - 1; i += 1){
			if(people[i].age < people[i + 1].age){
				youngest = people[i];
			}
		}
		return youngest.firstName + ' ' + youngest.lastName;
	}
	
	console.log('\tThe youngest person is ' + theYoungest());
};// end of function

function person(firstName, lastName, age){
	return {
		firstName: firstName,
		lastName: lastName,
		age: age
	};
}

//Problem 6
function  sixthProblem(){
	console.log('\nProblem 6');
	var firstPerson, secondPerson, thirdPerson,
		people = [],
		i, len,	youngest,
		groupedByAge, groupByFname, groupByLname;	
	
	firstPerson = person('Peter', 'Petrov', 10);
	secondPerson = person('Eva', 'Nikolova', 40);
	thirdPerson = person('Nikola', 'Penchev', 27);
	people = [firstPerson, secondPerson, thirdPerson];
	
	groupedByAge = groupPeopleBy(people, 'age');
	console.log('\tPeople gouped by age: ');
	console.log(groupedByAge);
	
	groupByFname = groupPeopleBy(people, 'firstName');
	console.log('\tPeople gouped by firstname: ');
	console.log(groupByFname);
	
	groupByLname = groupPeopleBy(people, 'lastName');
	console.log('\tPeople gouped by lastname: ');
	console.log(groupByLname);
		
	function groupPeopleBy(arr, prop){
		var group = {},
		groupProperty;
		len = arr.length;

		for(i = 0; i < len; i += 1){
			var groupProperty = arr[i][prop];
			group[groupProperty] = (arr[i]);
		}
		return group;	
	}
};// end of function
