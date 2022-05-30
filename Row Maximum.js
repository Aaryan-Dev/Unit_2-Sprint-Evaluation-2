// Given a matrix A of size n and m, you have to print the array of size n each element representing the maximum of ith row of the matrix A.


function rowMaximum(N,M,arr){
    
    let bag = "";
for(let i=0; i<N; i++){
    
    let max = -Infinity
    
    for(let j=0; j<M; j++){
        if(max<arr[i][j]){
            max = arr[i][j]
        }
}
       bag = bag + max + " ";
}
console.log(bag);
}
