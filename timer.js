function showtime(){
    const date = new Date();
    return date.getHours()+ "Hrs "+date.getMinutes()+" mins:"+date.getSeconds+"secs";
}
function showSessionExpire(){
    console.log("Activity-B: your session expired at "+showtime());
}
console.log("Activity-A: triggerring activity-B at "+showtime())
setTimeout(showSessionExpire,5000)

console.log("Activity-A triggerring activity-B at "+showtime()+"will execute after 5 second")
