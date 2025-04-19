let varA = 'A'; 
let varB = 'B'; 
let varC = 'C'; 
const VarATemp = varA;

varA = varB;
varB = varC;
varC = VarATemp;

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
