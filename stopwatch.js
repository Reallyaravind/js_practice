var counter=0;
function pingCounter(){
	console.clear();
	console.log(counter);
	counter=counter+1;
}
setInterval(pingCounter,1000);
