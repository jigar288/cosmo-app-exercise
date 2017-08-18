//##COLLEGE GPA

// var collegeGpa = 4.5;
//
// if (collegeGpa >= 4.0) {
//
//   alert('Doing mighty fine!');
//
// } else if (4.0 > collegeGpa && collegeGpa > 3.0){
//
//   alert("Not to shabby");
//
// } else {
//
//   alert("Lets hit the books");
//
// }

//##SKEEBALL SCORE

// var collegeGpa = 451;
//
// if (collegeGpa <= 150) {
//
//   alert('Pretty bad');
//
// } else if (150 < collegeGpa && collegeGpa <= 250){
//
//   alert("decent");
//
// } else if (250 < collegeGpa && collegeGpa <= 350){
//
//   alert("good");
//
// } else if (350 < collegeGpa && collegeGpa <= 450){
//
//   alert("great");
//
// } else if (450 < collegeGpa){
//
//   alert("pretty hard to do");
//
// }

//WHILE LOOP

// var names = ["jigar", "bhai", "novus", "bhai","joshua"]
// alert(names);
// var i = 0;
// while (i < names.length)
// {
//
//   names[i] = "happy birthday " + names[i];
//   i = i + 1;
// }


//FOR LOOP
//
// var names = ["jigar", "bhai", "novus", "bhai","joshua"]
// for (var i = 0; i < names.length; i = i + 1)
// alert(names);
// {
//
//   names[i] = "happy birthday " + names[i];
//
// }


//# Print each individual movies from an array using an alert by using a loop

// movies = ["avatar", "naruto", "ip man", "the dark knight"]
//
// for (var i = 0; i < movies.length; i = i + 1)
//
// {
//
//   alert(movies[i]);
//
// }

// var numbers = [1, 2, 3]
// var letters = ["a", "b", "c", "d", "e"]
//
// for (i = 0; i < letters.length; i = i + 1)
// {
//
// numbers.push(letters[i])
//
//
//
// }

var numbers = [1, 2, 3]
var letters = ["a", "b", "c", "d", "e"]
empty = []
var i = 0
while (i < numbers.length)
{

empty.push(numbers[i]);
empty.push(letters[i]);
i = i + 1;

}

empty.push(letters[3]);
empty.push(letters[4]);
