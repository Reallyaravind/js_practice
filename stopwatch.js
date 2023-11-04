var counter=0;
function pingCounter(){
	console.clear();
	console.log(counter);
	counter=counter+1;
}
setInterval(pingCounter,1000);
var ctr2=0;
for(var i=0;i<10000000000;i++){
	ctr2=ctr2+2;
}
console.log(ctr2);

//the above is a example of asynchonous code
