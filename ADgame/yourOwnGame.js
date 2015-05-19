$(document).ready(function() {

var gameBoard = makeGameBoard(10);

// console.log('our gameBoard is: ', gameBoard);

// Debugging pattern:
  // 1. Verify all of your assumptions by logging them to the console with clear comments on what each log is
  // 2. Find the last point in your code where things are doing what you expect them to/ the first point in your code where they're not doing what you expect.
  // 3. Iterate rapidly. Try new things (and console.log them!) until you get to a solution that works. Pay attention to each new result along the way (even if it's not what you expect it to be) to see what new information you can learn from it.
  // 4. High five someone nearby when you figure it out!

/*The gameBoard array contains 8 arrays representing the 8 rows in the board:

_.each(gameBoard, function(x) {
  console.log(x);
});

// The first row of gameBoard is made up of 8 objects (the squares):

_.each(gameBoard[0], function(x) {
  console.log(x);
});

// First we're accessing the thing at index 2 in our gameBoard when we say gameBoard[2]. Then, within that thing (which is an array representing a row), we're asking for the thing at the 6th index (which is going to be a squareObj):

console.log(gameBoard[2][6]);

// Access the object's properties like this:

gameBoard[3][5].color = 'black';

*/

// Let's change every square in the first row to a different color of your choosing:
  
_.each(gameBoard[0], function(x) {
  x.color = 'red';
});

// Now let's do the same thing using map on the second row of our gameBoard:

_.map(gameBoard[1], function(x) {
  x.color = 'green';
});

// Let's warm up to this by doing it the way we would before we knew how to program functionally: using nested for loops:

for (var i = 0; i < gameBoard.length; i++) {
  for (var j = 0; j < gameBoard[i].length; j++) {
    gameBoard[i][j].color = 'green';
  }
}

// Introducing functional programming:
      
for (var a = 0; a < gameBoard.length; a++) {
  _.each(gameBoard[a], function(b) {
    b.color = 'orange';
  });
}

// Totally functional with each:

var eachChangeToRed = function(arr) {
  _.each(arr, function(x, y) {
    _.each(arr[y], function(z) {
      z.color = 'red';
    });
  });
};

eachChangeToRed(gameBoard);

// Totally functional, half with map:
// Map must return something, reassign that return to what we want to change:

var mapChangeToPurple = function(arr) {
  _.each(arr, function(val) {
   val = _.map(val, function(obj) {
      obj.color = 'purple';
      return obj;
    });
  });
};

mapChangeToPurple(gameBoard);

// Just for fun, make checkers with just one function & nested eaches:

var eachMakeCheckers = function(arr) {
  _.each(arr, function(val, index) {
    if (index % 2 === 0) {
      _.each(arr[index], function(obj, objInd) {
        if (objInd % 2 === 0) {
          obj.color = 'blue';
        } else {
          obj.color = 'yellow';
        }
      });
    } else {
      _.each(arr[index], function(obj, objInd) {
        if (objInd % 2 !== 0) {
          obj.color = 'blue';
        } else {
          obj.color='yellow';
        }
      });
    }
  });
};

eachMakeCheckers(gameBoard);

var eachMakeCheckersSimpler = function(arr) {
  _.each(arr, function(val, index) {
    _.each(arr[index], function(obj, objInd) {
      if (index % 2 === 0) {
        if (objInd % 2 === 0) {
          obj.color = 'black';
        } else {
          obj.color = 'red';
        }
      } else {
        if (objInd % 2 !== 0) {
          obj.color = 'black';
        } else {
          obj.color = 'red';
        }
      }
    });
  });
};

eachMakeCheckersSimpler(gameBoard);

// make random colored checkers

var colors1 = ['blue', 'purple', 'red', 'orange', 'yellow', 'green'];
var colors2 = ['pink', 'darkred', 'violet', 'lime', 'gold', 'skyblue'];

var randomColor = function (arr) {
  return arr[Math.floor(arr.length * Math.random())];
};

var mapMakeCheckers = function(arr) {
  var color1 = randomColor(colors1);
  var color2 = randomColor(colors2);

  _.map(arr, function(val, index) {
    val = _.map(arr[index], function(obj, objInd) {
      if (index % 2 === 0) {
        if (objInd % 2 === 0) {
          obj.color = color1;
        } else {
          obj.color = color2;
        }
        return obj;
      } else {
        if (objInd % 2 !== 0) {
          obj.color = color1;
        } else {
          obj.color = color2;
        }
        return obj;
      }
    });
  });
};

mapMakeCheckers(gameBoard);

// random colors

/*

var colors = ['blue', 'purple', 'red', 'orange', 'yellow', 'green', 'pink', 'darkred', 'violet', 'lime', 'gold', 'skyblue'];

var randomColor = function (arr) {
  return arr[Math.floor(arr.length * Math.random())];
};

var makeRandomColors = function (arr) {
 _.each(arr, function(val, index) {
    _.each(val, function(obj) {
        obj.color = randomColor(colors);
    });
  });
};

makeRandomColors(gameBoard);

*/

// makePiece



makePiece(gameBoard, [4,5], 'babyDino');
gameBoard[4][5].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";
/*

makePiece(gameBoard, [7,1], 'babyDino');
gameBoard[7][1].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

makePiece(gameBoard, [1,2], 'superhero');
gameBoard[1][2].gamePiece.imageURL = "http://www.eschrade.com/wp-content/uploads/2011/12/superhero-white-bkg.png";

makePiece(gameBoard, [0,6], 'superhero');
gameBoard[0][6].gamePiece.imageURL = "http://www.eschrade.com/wp-content/uploads/2011/12/superhero-white-bkg.png";

*/

console.log("gamepiece example at 4,5: ", gameBoard);

// Find the pieces on first row board using filter:

var filterPieces =
  _.filter(gameBoard[0], function(obj) {
      return obj.gamePiece !== "";
  });

//console.log(filterPieces);

// Find pieces on whole board using filter and map:

var filterMapPieces =
  _.map(gameBoard, function(val) {
    return _.filter(val, function(obj) {
      return obj.gamePiece !== "";
    });
  });

//console.log(filterMapPieces);

//Reduce mini-sprint:
// You'll notice that oftentimes what you're doing with for loops and each statements is reducing an entire collection down to a single answer. This is such a common pattern that there's a canonical functional programming function called reduce. Let's explore what reduce does, and how it boils a collection down to a single answer!
// What reduce does is iterate over a collection, and invoke a callback function on each item in that collection.
  // That callback function takes two parameters: the result from the previous iteration, and the current item.
  // That callback returns a single item, given these two inputs.
  // An obvious way of using reduce is to sum up the values in an array. That would look like so:
  var testArr = [6,7,8,9,10];
  var sum = _.reduce(testArr, function(acc, nextVal) {
    return acc + nextVal;
  });
  //console.log('the sum returned from reduce is:',sum);
  // Let's break this down for a moment.
  // We're creating a variable sum, and setting it equal to the result of invoking reduce with some arguments.
    // Those arguments are the testArr we just created, and a callback function.
      // The callback function takes in two parameters: the result from the previous invocation of the callback function, and the current value being iterated over.
      // The callback then performs some logic on these two things and returns a single thing.
      // In our case, the callback function adds these two things together and returns the result of that addition.

  // Write out your own invocation of reduce that gives you the results of multiplying all the values in testArr together.
  
  var mult = _.reduce(testArr, function(acc, nextVal) {
    return acc * nextVal;
  });
  
  //console.log(mult);
  
  // Reduce also works on the values stored in an object.
  
  var codingPoints = {
    coderByte: 1200,
    eloquentJavaScript: 80,
    codeCademy: 700,
    telegraphPrep: 8000000
  };
  // Let's use reduce to add together all the values in our codingPoints object.
  
  var sumCodingPoints = _.reduce(codingPoints, function(acc, nextVal) {
    return acc + nextVal;
  });
  
  //console.log(sumCodingPoints);
  
  // reduce also takes an optional starting value that we haven't been giving it yet.
 
  // Try writing a new invocation of reduce that gives yourself 50 starting codingPoints and then sums up the rest of the codingPoints.
    
  var sumCodingPoints50 = _.reduce(codingPoints, function(acc, nextVal){
    return acc + nextVal;
  }, 50);
    
 // console.log(sumCodingPoints50);
    
  // Now try writing another invocation of reduce that multiplies the values in testArr together, but starts with the value of 10.
  
  var mult10 = _.reduce(testArr, function(acc, nextVal){
    return acc * nextVal;
  }, 10);
  
  //console.log(mult10);
  
  // Reduce is super flexible. You can use it like filter if you wanted to. Let's write out code that reduces the codingPoints object down to just an array of values that are larger than 1000. So we'd expect to get the following: [1200, 8000000]
  
var reduce1000 =
  _.reduce(codingPoints, function(acc, nextVal) {
    if (nextVal > 1000) {
      acc.push(nextVal);
    } return acc;
  }, []);
    
//console.log(reduce1000);
  
// Now let's think through how we could use reduce to turn an array of nested arrays into a flattened array.

var nestedArrs = [[1,2,3],[4],[5,6,7,8],[9,10]];

// We can use reduce to simplify that down to a single value of [1,2,3,4,5,6,7,8,9,10].

var reduceArrsFor = function(arr) {
 var res = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++){
      res.push(arr[i][j]);
    }
  }
  return res;
};

//console.log(reduceArrsFor(nestedArrs));

var reduceArrs =
  _.reduce(nestedArrs, function(acc, innerArr) {
    _.each(innerArr, function(val) {
      acc.push(val);
    });
    return acc;
  }, []);
  
//console.log(reduceArrs);

// Rewrite filter using reduce

var rewriteFilter = function(list, func) {
  
  var res = [];
  
  if(Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      if (func(list[i])) {
        res.push(list[i]);
      }
    }
  } else {
    for (var key in list) {
      if (func(list[key])) {
        res.push(list[key]);
      }
    }
  }
  return res;
};

var rewriteFilterReduce = function (list, func) {
  _.reduce(list, function(acc, next){
    if(func(next)) {
      acc.push(next);
    }
  }, []);
};

// Rewrite map using reduce

var rewriteMap = function(list, func) {
 
  _.reduce(list, function(acc, next) {
      acc.push(func(next));
  }, []);
  
};

  // Another interesting use of reduce is with booleans.
    var friends = {
      rihanna: true,
      taylorSwift: true,
      katyPerry: false
    };
    // Say you have a collection of people, and a true or false value marking whether you're friends with them or not. Maybe you want to iterate through the whole collection and see if you're friends with everyone. We can use reduce for that!
      // Let's think about this for a moment. On each iteration, we want to check two things:
        // 1. Whether we're friends with the current person (current value)
        // 2. Whether we're friends with everyone who came before (previous value)
  var reduceFriends =  _.reduce(friends, function(previous, current) {
        return previous && current; //return true ONLY IF both the current value is true, and the result of all previous iterations is true too. return false if either the current or the previous is false.
    }, true); //start with true. What happens if we start with false?
 
  var bouncersNightmare= {ashley: 22, bobby:23, camila:25, gabriela:22, ben:21, miranda:24, jayden:22, sofia:23, matias:21, hannah:21, makayla:23, justin:22, isaiah:25, caleb:22, chloe:24};

  // Use reduce to turn bouncersNightmare into a single boolean value certifying whether everyone in the collection is at least 21.

  var over21 =
    _.reduce(bouncersNightmare, function(acc, age) {
      if (age >= 21 && acc){
        return true;
      } else {
        return false;
      }
    }, true);
    
  //console.log(over21);


 // Let's return to our gameBoard now. Step back up to just before we went on the reduce mini-sprint to remind yourself what we were doing.
 
var findPieces =
  _.map(gameBoard, function(val) {
    return _.filter(val, function(obj) {
      return obj.gamePiece !== "";
    });
  });

//console.log('this is where the pieces are ', findPieces);
 
    // Can you think of a way we could reduce an array filled with arrays to a single array just filled with all the values contained in each subarray?
    // Hint: what if we tried passing in an empty array as the starting value?
  
var reduceFindPieces =

  _.reduce(findPieces, function(acc, innerArr) {
    acc.push(innerArr.length);
    return acc;
  }, []);
  
//console.log(reduceFindPieces);


// 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']

var piecesToAddPlayer1 = [
  {
  name: 'lindsay',
  URL: 'http://truthiscool.com/images/Portia-de-Rossi-Plastic-Surgery-Season-1-Lindsay-Bluth-Season-4-Lindsay-Bluth_s.jpg',
  }, {
  name:'ann',
  URL: 'http://spinoff.comicbookresources.com/wp-content/uploads/2012/09/ann-veal-thumb.jpg',
  }, {
  name: 'maeby',
  URL: 'http://cdn2.crushable.com/wp-content/uploads/2013/04/Maeby-Funke-2.jpeg',
  }];

var piecesToAddPlayer2 = [
  {
  name: 'gob',
  URL: 'http://vignette1.wikia.nocookie.net/arresteddevelopment/images/1/15/Orange_-_Season_One_photoshoot_(8).jpeg/revision/latest?cb=20120429230530',
  }, {
  name:'tobias',
  URL: 'http://img.gawkerassets.com/img/17qe4eexv8pkcjpg/original.jpg',
  }, {
  name: 'buster',
  URL: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/arrested-development/thumb/8/86/Buster_Bluth.png/228px-Buster_Bluth.png',
  }];

// 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']

var playerNames = [
  {
  name:'lucille',
  URL: 'http://kyleledbetter.com/silo-2/assets/images/avatars/lucille_128.jpg',
  }, {
  name: 'george',
  URL: 'http://kyleledbetter.com/silo-3/assets/images/avatars/george_128.jpg',
  }];

// 3. Now use two (nested) each loops to add these pieces to the board.
  // Question1: How can you make sure each piece ends up on a different square on the board?
  // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this. If you're not familiar with the modulus operator, it gives you the remainder from dividing two numbers. So if we divide 12 by 8, that gives us a remainder of 4 (we have 4 left over after taking 8 out of 12). As always, feel free to google around for more information!
  // Question3: How can we line these pieces up on opposite sides of the board?
  // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks.
  
var placePieces = function(gameBoardArr) {
  
  _.each(gameBoardArr, function(row, rowInd) {
    _.each(row, function(obj, objInd) {
      //player one
        //even rows
        if (rowInd < 3 && objInd % 2 === 0 && rowInd % 2 === 0) {
            obj.gamePiece = {
              //typeOfPiece: piecesToAddPlayer1[objInd % piecesToAddPlayer1.length].name,
              typeOfPiece: piecesToAddPlayer1[rowInd].name,
              playerBelongsTo: playerNames[0].name,
              //imageURL: piecesToAddPlayer1[objInd % piecesToAddPlayer1.length].URL,
              imageURL: piecesToAddPlayer1[rowInd].URL,
          };
        //odd rows
        } else if (rowInd < 3 && objInd % 2 !== 0 && rowInd % 2 !== 0) {
          obj.gamePiece = {
              //typeOfPiece: piecesToAddPlayer1[objInd % piecesToAddPlayer1.length].name,
              typeOfPiece: piecesToAddPlayer1[rowInd].name,
              playerBelongsTo: playerNames[0].name,
              //imageURL: piecesToAddPlayer1[objInd % piecesToAddPlayer1.length].URL,
              imageURL: piecesToAddPlayer1[rowInd].URL,
          };
      //player two
        //even rows
        } else if (rowInd > gameBoardArr.length-4 && objInd % 2 === 0 && rowInd % 2 === 0) {
          obj.gamePiece = {
            typeOfPiece: piecesToAddPlayer2[rowInd % piecesToAddPlayer2.length].name,
            playerBelongsTo: playerNames[1].name,
            imageURL: piecesToAddPlayer2[rowInd % piecesToAddPlayer2.length].URL,
          };
        //odd rows
        } else if (rowInd > gameBoardArr.length-4 && objInd % 2 !== 0 && rowInd % 2 !== 0) {
          obj.gamePiece = {
            typeOfPiece: piecesToAddPlayer2[rowInd % piecesToAddPlayer2.length].name,
            playerBelongsTo: playerNames[1].name,
            imageURL: piecesToAddPlayer2[rowInd % piecesToAddPlayer2.length].URL,
          };
        }
      });
  });
};


placePieces(gameBoard);

// adding player images

var player1 = $('<img>').attr('src', playerNames[0].URL);
$('.player1').append(player1);
var player2 = $('<img>').attr('src', playerNames[1].URL);
$('.player2').append(player2);


// 4. Great! Now we have two fierce opposing armies (or two groups of friends just trying to gather together on the same square for a group hug?!) arranged on the board. It's time to make them look intimidating or pretty for their impending battle or hugfest.
  // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations.
    // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have a gamePiece on them.

var filterSquaresWithPieces =
  _.map(gameBoard, function(row) {
    return _.filter(row, function(obj) {
      return obj.gamePiece !== "";
    });
  });
  
//console.log("how many pieces on each row: ",filterSquaresWithPieces);

    // B. Use map to change each of the objects in the array returned from filter to an array of their positions. Positions are a property saved as a property on each object. Console.log each object to check it out!

// This works for the whole board:

var mapRowsPositions =
  _.map(filterSquaresWithPieces, function(row) {
    return _.map(row, function(obj){
      if (row.length > 0) {
        return obj.position;
      } else {
        return "";
      }
    });
  });
  
//console.log("positions of pieces on whole board: ", mapRowsPositions);

    // C. Use each to repeat this process on each row in your gameBoard

/*var findPiecePositionsBoard =
  _.map(gameBoard, function(row) {
    return _.map(row, function(obj) {
      return obj.position[0] + "," + obj.position[1];
    });
  });

console.log(findPiecePositionsBoard); */

    // D. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in.

var reduceRowsPositions =
  _.reduce(mapRowsPositions, function(acc, row) {
    _.each(row, function(pos) {
      acc.push(pos);
    });
    return acc;
  }, []);

//console.log('flattened array of positions: ', reduceRowsPositions);

    // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board.
    
/*
This works!

var goThroughPositionArrays = function(arr) {
  _.each(gameBoard, function(row){
    _.each(row, function(obj){
      _.each(reduceRowsPositions, function(pos) {
        if (pos === obj.position) {
          obj.gamePiece.imageURL = 'http://www.cinemablend.com/images/sections/56105/arrested_development_56105.jpg';
        }
      });
    });
  });
};

goThroughPositionArrays(gameBoard);

*/

// 5. Use filter to grab all gamePieces of the same type, and then use each to iterate through them and set their movement descriptions. Don't worry about building out the logic of how you'd make them move- for now just have fun coming up with moves you'd want your various pieces to do. For example, maybe scaredKitty goes and hides in the corner, and impetuousDragon frequently flies off and leaves the board entirely.


var findSamePieceTypes = function(arr) {
  _.each(gameBoard, function(row) {
      _.filter(row, function(obj) {
        if (obj.gamePiece.typeOfPiece === 'lindsay') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Dances like a chicken and chants, "Chaw! Chee-chaw! Chee-chaw!"';
          });
        } else if (obj.gamePiece.typeOfPiece === 'ann') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Turns into an egg.';
          });
        } else if (obj.gamePiece.typeOfPiece === 'maeby') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Laughs and says, "Marry me!"';
          });
        } else if (obj.gamePiece.typeOfPiece === 'tobias') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Takes off all his clothes, revealing a pair of denim cut-offs.';
          });
        } else if (obj.gamePiece.typeOfPiece === 'buster') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Drinks an entire pack of juice boxes.';
          });
        } else if (obj.gamePiece.typeOfPiece === 'gob') {
          return _.each(obj, function (val) {
            obj.gamePiece.movementDescription = 'Does an "illusion."';
          });
        }
    });
  });
};

findSamePieceTypes(gameBoard);
console.log('check lindsay movmement: ', gameBoard);

// 6. Use reduce to create an object that has a tally of all our gamePieces. For example, the result might be:
// { babyDino: 3,
//   impetutousDragon: 2,
//   scaredKitty: 4,
//   hobblingPirate:8,
//   groupHuggers:12 }
  // You should be able to do this by just using reduce inside of another reduce if you're feeling ambitious!
  
var tallyGamePieces =
  _.reduce(gameBoard, function(acc, row) {
    _.filter(row, function(obj) {
      return acc[obj.gamePiece.typeOfPiece] = 0;
    });
    return acc;
  }, {});

console.log('object that tallies all game pieces: ', tallyGamePieces);

// 7. When a user clicks on a square, the app will invoke a function on the global scope called 'clickHandler'.
  // This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);
  // TODO: Uncomment the lines below and see what happens when you click on a square on the board!
    // window.clickHandler = function(positionArr) {
    //   var row = positionArr[0];
    //   var column = positionArr[1];
    //   console.log(gameBoard[row][column]);
    // };
  // Write some logic inside of clickHandler that highlights all the squares in the row that has been clicked on by turning them pink.
  // Now expand this to include all the squares in the same column as the square that was clicked on. So if the user clicks on a square in row 3, column 4, all squares in row 3 and all squares in column 4 should become pink.

// 8. Now let's go through and create a function to undo highlightPieces so the board is colored according to it's default, alternating colors. There are several different approaches that will work well here. Choose whichever one you want (but do keep practicing functional programming- that will be incredibly valuable, particularly if it's still a bit painful for you). Just keep in mind that the end goal is to return the board to a "normal" looking state where the color of the pieces alternates as it originally did, with the gamePieces still being displayed on the relevant squares.

// 9. Now let's abstract out this logic and put it into a function on each of our gamePieces.
  // Create a function on each gamePiece called highlightSquares. Remove that functionality from our clickHandler function and put it into the highlightSquares function on each object.
  // Now, inside clickHandler, let's see if there is a gamePiece on the square that was clicked on. If there is, invoke highlightSquares as a method on that object.

// 10. Now that highlightSquares is a method on each gamePiece object, we can change what each gamePiece's movement pattern is. Go through and change the logic of which squares on the board are highlighted for each different type of piece. For our scaredKitten example, whose movement description is "Runs to a corner and hides", we would highlight only the four corner squares.
  // Each gamePiece of the same type should have the same highlightSquares functionality.
  // See if you can highlight all the diagonal squares from a piece.
    // HINT: This is going to sound obvious, but what math do you have to do to move from square [0,0] to it's lower-right diagonal of [1,1]?
    // HINT: There are 4 potential diagonals from a given square:
      // 1. up and to the right
      // 2. down and to the right
      // 3. down and to the left
      // 4. up and to the left
      // Each one will have it's own logic and will likely have to be built out separately. Don't feel bad about this! Start by making just one of those four work.
        // This is a super valuable pattern called MVP, or "Minimum Viable Product". All it means is get the tiniest possible version of something working first, then work on expanding it out to a full feature set. In this case, make one diagonal work first, then worry about the other three.

// 11. Now we're highlighting specific squares that represent where each piece can move to. Let's build out some logic, starting in our clickHandler, that lets us highlight squares on the board when a piece is clicked, and then un-highlight the board (return it to it's default state) when that same piece is clicked again. There are many different ways of accmplishing this too- we're going to challenge you to figure out which path you want to take!

// 12. Now we can click on a piece to highlight the available squares it can move to, and click on it again to un-highlight those squares. Let's expand the logic of the highlightPieces methods! Check each square that gets highlighted to see if it has a piece on it or not. If there is a piece on that square already, set the text property of that square to be the following two lines:
  // "OXO
  // XOX"
  // This should tell the user that there is a potential collision on that square, if the piece were to move there.

// 13. Now let's build out the ability to make each piece move on the board!
  // While a piece is clicked (i.e., the squares it can move to on the board are highlighted), if one of those squares is clicked on, move the piece there!
  // For now, let's assume our user is being nice to us and will only try to move the gamePiece to a square that is eligible to be moved to.
  // When this happens, there are two things we need to do:
    // 1. Add the piece to it's new location
    // 2. Remove the piece from it's current location
    // 3. Remove highlighting from the board
    // 4. Depending on your implementation, set that piece as inactive.

// 14. Great! Now we can click on a piece and then click on another square to move it there. That's pretty cool. But we've been assuming that our user would be nice to us by only trying to move a piece to where it's allowed to move. What if we wanted to allow not-so-nice people to play our game too? Let's add in a logic check here. Make sure the square the user clicks on to try to move a piece to is a square that piece can actually move to.
  // How can we accomplish this? Well we've already highlighted the eligible squares on the board with a certain color, right? Let's use that to our advantage!
  // If the user-selected square isn't eligible, pop up an alert for the user telling them to either:
    // A. Choose a different square that is highlighted to move the piece to
    // B. Click on the same original square again to de-select that piece.

/*
CONGRATULATIONS!!
You've now gotten in extensive practice on functional programming, and should be incredibly comfortable with a variety of creative ways to put functional programming to use!
You've typed up many, many lines of code, debugged extensively, and learned some basics of making things show up on the user's screen.
You've built out the basic functionality needed for a board game. From here, you can easily extend this to be whatever you want it to be! You can build out your own game logic from here to make it into any game you want. You can add in your own gamePieces (with their own funny images!), and style the board any way you want.
Hope you've had an awesome time on these first parts of your JS Journey! We're honored that we got to share them with you. Can't wait to see the amazing things your future holds in store with these newfound skills :)
Sincerely,
The team at Telegraph Academy
*/


  // NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, we need to call renderGameBoard() and pass in the updated gameBoard as an argument.
  renderGameBoard(gameBoard); // DON'T REMOVE THIS LINE. This line makes sure that any changes you make to your JS code will actually show up on the screen. Try commenting it out and see how the gameBoard is no longer rendered to the browser, even though your logic is clearly still running, as seen by your console.logs.

});
