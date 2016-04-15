var examplearray = [2, -5, 10, 5, 4, -10, 0];
var results = process(examplearray);
console.log(results);






function process (datap)
{
      var positions = [];
                    /* a = element para el each, i = indice donde esta ese elemento dentro del array*/ 
      datap.forEach (function (a, i){
           datap.forEach (function (b, j){
              if (a + b === 0)
              {
              	 positions.push (i + "," + j)
              }
           });

      });
      return positions;
}

process(examplearray);




                                /* for (i = 1; i <= 6; i = i + 1)
                                {

                                }*/
  



/*var capsfoods = foods.map (function (food) {

});*/



 /*este parentesis es del MAP*/

/*function eat (foodp)
{
	console.log("Eating some " + foodp);
}

eat("pizza");*/