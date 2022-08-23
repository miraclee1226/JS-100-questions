// 1
// var nums = [100, 200, 300, 400, 500];
// nums.splice(3,4)
// console.log(nums);

// 2
// let arr=[200,100,300]; ❌
// arr.splice(2,0,10000);
// console.log(arr);

// // 3 ❌
// 3

// // 4
// 2

// // 5
// 4

// // 6
// 2

// // 7
// 3 5 

//  8 ❌
// 78

// 9 ❌
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';
// console.log(year.concat('/', month, '/', day, '', hour, ':', minute, ':', second))


// 10 ❌
// const n = prompt('숫자를 입력하세요.');
// let tree = '';

// for(let i=1; i<=n; i++){
//     let star = '';
//     for(let j=1; j<=n-i; j++){
//         star += ' ';
//     }
//     for(let k=1; k<=2*i-1; k++){
//         star += '*';
//     }
//     tree += star + '\n';
// }
// console.log(tree);

// 11 ❌
// let s =0;    
// for(let i=1; i<=100; i++){
//     s+=i
// }
// console.log(s);

// 12 https://ko.javascript.info/constructor-new
// function Wizard(health,mana,armor) {
//     this.health = health;
//     this.mana = mana;
//     this.armor = armor;

//     this.attack = function () {
//         console.log('파이어볼');
//     }
    
// };

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 13
// const n = prompt('숫자를 입력하세요.');
// const 행성= 
//     ['수성', 
//     '금성', 
//     '지구', 
//     '화성', 
//     '목성',  
//     '토성', 
//     '천왕성', 
//     '해왕성'];
// console.log(행성[n-1]);


// 14
// const n =prompt('3의 배수면 짝, 아니면 n이 출력됩니다.');
// // if(n%3 == 0) {
// //     console.log('짝');
// // }else {
// //     console.log(n);
// // }

// console.log(n%3 == 0 ? '짝' : n );


// 15
// const n = prompt('이름을 입력하세요')
// const answer = `안녕하세요 저는 ${n}입니다`
// console.log(answer);


// 16 
// const n = prompt('거꾸로 바뀝니다')
// const str = n.split(''); // 문자열을 배열로 바꿈
// const reverse = str.reverse(); // 배열을 거꾸로 뒤집음
// const str2 = reverse.join(''); // 뒤집어진 배열을 이어붙여서 뒤집힌 문자열을 만듦
// console.log(str2);


// 17
// const n = prompt('150이상이면 yes, 150 미만이면 no')
// if(n>= 150) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// 18
// const n = prompt('Average score').split(' ');

// let sum = 0;
// for (let i=0; i<3; i++ ){
//     sum += n[i]
// }
// let avg = sum / n.length
// console.log(avg);

// 19
// const n = prompt('a의 b승 구하기').split(' ');
// console.log(Math.pow(parseInt(n[0],10), parseInt(n[1],10)));

// 20
// const n = prompt('b를 a로 나눴을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요').split(' ');
// console.log(parseInt(n[0]/n[1], 10), parseInt(n[0]%n[1], 10));

// // 담안
// const result = Math.floor(parseInt(n[0], 10) /  parseInt(n[1], 10));
// const left = parseInt(n[0], 10) % parseInt(n[1], 10)

// 정리
// Math.floor() : 소수값이 존재할 때 소수값을 버림.
// parseInt() : 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환함.










