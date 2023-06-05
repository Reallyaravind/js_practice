prompt("What is your name?")
prompt("What is your crush's name?")
var lovescore=Math.random()*100; // when we multiply by n it goes upto n-1 
lovescore=Math.floor(lovescore)+1;
if(lovescore>70){
    alert("Your lovescore is "+lovescore+"%"+ " you must love each other like kanye loves kanye");
}else{
    alert("Your lovescore is "+lovescore+"%");
}