// function closure( param ) {
// 	return function() {
// 		console.log( param );
// 	}
// }
//
// var inner = closure( "First" );
// inner();
//
// var innerTwo = closure( "Second" );
// innerTwo();
//
// inner();

for ( var i = 0; i < 5; i++ ) {
	var currentI = closure( i );
	setTimeout( currentI, i * 1000 );
}

function closure( savedReference ) {
	return function() {
		console.log( savedReference );
	}
}

function createGreeter( name, mood ) {
	var greeting = "Hello " + name + " you look " + mood + " today.";

	return function() {
		return greeting;
	}
}

var greetDontavious = createGreeter( "Dontavious", "indecisive" );

console.log( greetDontavious() );

var greetJoe = createGreeter( "Joe", "smug" );
greetJoe();
greetDontavious();




function greetPerson( name ) {
	return function( mood ) {
		return "Hello " + name + " you look " + mood + " today.";
	}
}

var greetDontavious = greetPerson( "Dontavious" );

console.log( greetDontavious( "gloom" ) );


sum( 2, 3 ); // 5

sum( 2 )( 3 ); // 5
var firstNum = sum( 2 );
firstNum( 3 ); // 5


function sum( numOne, numTwo ) {
	if ( numTwo !== undefined ) {
		return numOne + numTwo;
	}

	return function( innerNum ) {
		return numOne + innerNum;
	}
}

sum( 5, 0 );

var personModule = (function( name, mood, password ) {
	var person = {
		name: "Dontavious"
		, mood: "gloom"
		, falconsFan: false
		, password: "peanuts1"
	};

	return {
		getName: function() {
			return person.name;
		}
		, getMood: function() {
			return person.mood;
		}
		, setMood: function( newMood ) {
			person.mood = newMood;
		}
		, setPassword: function( newPassword ) {
			if ( newPassword.length < 6 ) {
				return "Password must be longer";
			}
			person.password = newPassword;
		}
	};

})( "Taryn", "good", "jellybeans" );


personModule.setPassword( "hunter2" );

