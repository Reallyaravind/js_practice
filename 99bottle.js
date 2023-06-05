function bottle(){
    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleword = "bottle"; 
        if (numberOfBottles === 1) { 
            bottleword = "bottles";
        }
        console.log(numberOfBottles +" " + bottleword+ " of beer on the wall");
        console.log(numberOfBottles +" " +bottleWord+ " of beer, ");
        console.log("Take one down, pass it around, ");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleword+ " of beer on the wall.");    
    }
}
bottle();