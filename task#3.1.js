console.clear();
var inputNum = 11; 
var res = Math.ceil(Math.sqrt(inputNum));
var sum = 0;

(res % 2 === 0) ? res += 1 : res;

var arr = [];
var c = (res - 1)/2; // center

var x = c, y = c,
    dx = 0, dy = 1;
var curr2 = 1,
    lap2 = 0;

for(let i=0; i<res; i++) {
  arr[i] = [];
  for(let j=0; j<res; j++) {
    arr[i][j] = 0;
  }
}

while(sum <= inputNum) {
    if(x === c && y === c) {
        dx = 0; dy = 1; 
    } else if (x === c + lap2 && y === c + lap2 + 1) {
        dx = -1; dy = 0; lap2++
    } else if (x === c - lap2 && y === c + lap2) {
        dx = 0; dy = -1;
    } else if (x === c - lap2 && y === c - lap2) {
        dx = 1; dy = 0;
    } else if (x === c + lap2 && y === c - lap2) {
        dx = 0; dy = 1; 
    }
  
  if(x === c && y === c) {
        sum = 1;
    } else {
        sum = arr[x][y-1] + arr[x][y+1] + arr[x-1][y-1] + arr[x-1][y] + arr[x-1][y+1] + arr[x+1][y-1] + arr[x+1][y+1] + arr[x+1][y];
    }
    arr[x][y] = sum;
  
  x += dx; y += dy;
}

console.log(sum);
