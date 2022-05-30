// A critical point in an array is defined as either a local maxima or a local minima.

// A element is a local maxima if the current element has a value strictly greater than the previous element and the next element.

// A element is a local minima if the current element has a value strictly smaller than the previous element and the next element.

// Note that a element can only be a local maxima/minima if there exists both a previous element and a next element.

// Given an integer array of size N, you have to print minDistance and maxDistance, where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, minDistance = -1 and maxDistance = -1.


function minmax(N, arr){
        
    let arra = [];    
        for(j=1; j<arr.length-1; j++){
        if(arr[j]<arr[j-1]&&arr[j]<arr[j+1]){
        arra.push(j);
        }
        
        else if(arr[j]>arr[j-1] && arr[j]>arr[j+1]){
        arra.push(j);
        }
        }
        if(arra.length>=2){
        console.log((arra[arra.length-1]-arra[arra.length-2]), arra[arra.length-1]-arra[0]);
             
} else{
    console.log(-1, -1);
}
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    for(let i=0; i<T; i++){
        let N = +input[line]
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++;
        minmax(N, arr);
        
    }
        
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}