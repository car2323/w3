var read = require("read");


var Question = function (questionp, answerp, idp){
    this.question_text =  questionp;
    this.answer = answerp;
    this.id = idp;
};
var Array_Question = function (){
	this.arrayquestion = [];
};

var question0 = new Question ("question0", "answer0", 0);
var question1 = new Question ("question1", "answer1", 1);
var question2 = new Question ("question2", "answer2", 2);
var question3 = new Question ("question3", "answer3", 3);

var object_array_q = new Array_Question ();
object_array_q.arrayquestion.push(question0, question1, question2, question3);

var positionp = 0;
function show_question(positionp){
  
  if(positionp <= object_array_q.arrayquestion.length-1)
  {
  	options = {
	prompt: object_array_q.arrayquestion[positionp].question_text
    }
    console.log("Question:");
	read(options, checkanswer);
           function checkanswer(err, input){
	          
	          if (object_array_q.arrayquestion[positionp].answer === input)
	          {
		           positionp = positionp + 1;
		           console.log("C O R R E C T");
		           show_question(positionp);
	          }
	          else
	          {
                  console.log ("E R R O R");
                  show_question(positionp);
              }
            };
  }
  else
  {
  	console.log ("G a m e   O v e r")
  }
};

show_question(positionp);








    /*  options = {
            prompt: object_array_q.arrayquestion[0].question_text
        }
        read(options, displayName);
           function displayName (err, name){
             console.log("Your name is: " + name)
           }*/

/*for(var i=0; i < object_array_q.arrayquestion.length; i = i+1){
  console.log(object_array_q.arrayquestion[i].id);
  console.log(object_array_q.arrayquestion[i].question_text);
  console.log(object_array_q.arrayquestion[i].answer);
};*/
