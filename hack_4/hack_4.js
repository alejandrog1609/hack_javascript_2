/**
* agregar a los valores del array los tokens:
* {f:6} y {g:7}
* dentro del array result 
* 
* 
* output => [{g:7},{a:1},{b:2},{c:3},{d:4},{e:5},{f:6}]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let tokenF = {f:6};
let tokenG = {g:7};
let result = [];
result.push(tokenG)
for ( i = 0; i < arr.length; i ++) {
   result.push(arr[i])
}
result.push(tokenF)
 
//export result
module.exports = result; 