var Population = function (namep, healthp, strengthp, warcrys){
    this.name = namep; 
    this.health =  healthp;
    this.strength = strengthp;
    this.warcrys = warcrysp;
};

var Farmers = function (healthp, strengthp){
    this.health =  healthp;
    this.strength = strengthp;
};
var ArrayFarmers = function (){
	 this.array_farmers = [];
}
                                          /*health 0...10 where 10 it's excellent*/
                                         /*strength 0...10 where 10 it's excellent*/
var viking1 = new Population ("Peter", 10, 10, "chaca chaca uhhhh");
var viking2 = new Population ("Peter", 9, 9, "chaca chaca uhhhh");
var viking3 = new Population ("Peter", 10, 7, "chaca chaca uhhhh");
var viking4 = new Population ("Peter", 10, 6, "chaca chaca uhhhh");

                                          /*health 0...5 where 5 it's excellent*/
                                         /*strength 0...5 where 5 it's excellent*/
var farmer1 = new Farmers (5,5);
var farmer2 = new Farmers (5,5);
var farmer3 = new Farmers (5,5);
var farmer4 = new Farmers (5,5);



function pitfights (viking1p, viking2p, maximun_turnp)
{
    for(var i = 0; i <= maximun_turnp; i = i+1)
    {
    	if ((viking1p.health === 2) || (viking2p.health === 2))
    	{
    		 console.log ("One Viking IS CLOSE TO DEATH");
             break;

    	}	
        else
        {
             viking1p.health = this.health - (viking1.strength - viking2.strength)
             viking2p.health = this.health - (viking1.strength - viking2.strength)
        }    
        
    };
};


function asault (viking1p, array_farmersp){
/*tengo q crear un array de muertos*/
var rounds = Math.random() * (8 - 5) + 5;
     for (var i = 0; i <= rounds; i++){
          var pic = Math.random() * (array_farmersp.lenght - 0) + 0;	 
          var farmer = array_farmersp[pic];
          farmer.health = this.health - (viking1.strength - farmer.strength)
          viking1p.health = this.health - (viking1.strength - farmer.strength)
          /*tengo que preguntar si el healt del vikingo y del farmer es menor q cero entonces acumularlo en un array que cuente los muertos de cada uno*/
     };
};

function add_farmer (farmerp)
{
    this.array_farmers.push(farmerp);
    return array_farmers
};












