console.clear();
var inputNum = 277678; 
var res = Math.ceil(Math.sqrt(inputNum));

(res % 2 === 0) ? res += 1 : res;

var curr = Math.pow(res, 2);
var i = res - 1, j = res - 1, di = 0, dj = -1; 
var ci = (res - 1)/2, cj = (res - 1)/2;

while(curr !== inputNum) {
  if (i === res-1 && j === 0) {
    di = -1; dj = 0;
  } else if (i === 0 && j === 0) {
    di = 0; dj = 1;
  } else if (i === 0 && j === 4) {
    di = 1; dj = 0;
  }
  
  i += di; j += dj;
  curr--;
}

var steps = Math.sign(i - ci)*(i - ci) + Math.sign(j - cj)*(j - cj);

console.log(steps); 

