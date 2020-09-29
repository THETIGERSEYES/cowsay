let myName = 'Sam';
let myCampus ='Orléans';
const myInfos = () => {
    //console.log(`My name is ${myName} and I m wilders in ${myCampus} campus.`);
};

module.exports = myInfos;

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `My name is ${myName} and I m wilders in ${myCampus} campus.`,
   	e : "oO",
	T : "U "
}));
