var eval= [];
var ftotal= 0;
var diff= [];
var info= require("..data/friends.js")

for(i=0; i<info.friends.length; i++){
  for(j=0; j<info.friends[i].score.length; j++){
    ftotal= ftotal+info.friends[i].score[j]
  }
  eval.push(ftotal)
}

for(k=0; k<info.friends.length; k++){
  
  diff.push[Math.abs(user-eval[k])];
}

var a= diff[0];
var b= diff[0];

for (i=0; i< diff.length; i++){
  if(diff[i]>a){
    a= diff[i]
  }
    else if(diff[i]<b){
      b=diff[i]
    }
  }

console.log(b)
console.log(diff.indexOf(b))

var point=diff.indexOf(b)

var match= info.friends[point].name

console.log("Congrats! You matched with " + match)

      $.post("/api/modal", match,
        function(data) {

          if (data) {
            alert("Yay! You are officially booked!");
          }

          else {
            alert("Something's wrong, maybe you'll find love one day, but it's not going to be here!");
          }

        });
