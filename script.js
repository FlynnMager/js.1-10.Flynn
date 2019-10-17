//write first method
function sleep_in(weekday,vacation) {
    if(vacation==true){
        return true
    } else if(weekday==false){
        return true
    }else{
        return false
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile==b_smile){
        return true
    }else{
        return false
    }
}
function string_times(x,y){
    var z = "";
    for(var i=0;i<y;i++){
        z = z+x
    }
    return z
}
function front_times(x,y){
    var z = "";
    if(x.length >= 3) {
        x = x.substring(0, 3);
    }else if(x.length==2){
        x=x.substring(0,2);
    }else if(x.length==1){
        x=x.substring(0,1);
    }else if(x.length==0){
        x="";
    }
    for(var i=0;i<y;i++){
        z = z+x
    }
    return z
}
function string_bits(string){
    z = string.substring(0,1);
    if(string.length % 2 == 0){
        var r = string.length/2 - 1
    }else{
        var r = (string.length-1)/2
    }
    for(var i = 1; i < r + 1 ; i++){
        z= z+ string.substring(2*i,2*i+1);
    }
    return z
}
function caughtSpeeding(x,y){
    if(y==true){
        x = x - 5
    }
    if(x>80){
        return 2
    }else if(x>60){
        return 1
    }else{
        return 0
    }
}
function fizz_buzz(num){
    var x="";
    if(num % 3 == 0){
        x= x + "Fizz";
    }
    if(num % 5 == 0){
        x= x + "Buzz";
    }
    if(num % 3 == 0 || num % 5 == 0){
        x=x;
    }else{
        x=num+"!"
    }
    return x;
}
function teaParty(x,y){
    if(x<5||y<5){
        return 0
    }else if(x>=2*y||y>=2*x){
        return 2
    }else if(x>=5&&y>=5){
        return 1
    }
}
function blackjack(x,y){
    if(21-x>=0||21-y>=0) {
        if(21-y<0) {
            return x
        }else if(21-x<0){
            return y
        }else if(21-x<=21-y){
            return x
        }else{
            return y
        }
    }else{
        return 0
    }
}
function loneSum(a,b,c){
    if(a==b&&b==c){
        return 0
    }else if(a==b){
        return c
    }else if(a==c){
        return b
    }else if(b==c){
        return a
    }else{
        return a+b+c
    }
}
//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("Hi",5);
    document.getElementById("output").innerHTML += front_times(x,y);
    document.getElementById("output").innerHTML += string_bits(string);
    document.getElementById("output").innerHTML += caughtSpeeding(x,y);
    document.getElementById("output").innerHTML += fizz_buzz(num);
    document.getElementById("output").innerHTML += teaParty(x,y);
    document.getElementById("output").innerHTML += blackjack(x,y);
    document.getElementById("output").innerHTML += loneSum(a,b,c)
}
