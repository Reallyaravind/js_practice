function Whoispaying(){
    var noofpeople=names.length;
    var randompersonpostion=Math.floor(Math.random()*noofpeople);
    var randomperson=names[randompersonpostion];
    return randomperson+" is going to buy lunch today";
}