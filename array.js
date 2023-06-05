var guestlist=["aravind","ram","sita"]
var guest=prompt("What is your name");
if(guestlist.includes(guest)){
    console.log("Welcome");
}else{
    console.log("Sorry, maybe next time");
}