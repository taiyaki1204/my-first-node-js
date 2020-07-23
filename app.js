'use strict';

//コマンドライン引数の入った配列
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);

