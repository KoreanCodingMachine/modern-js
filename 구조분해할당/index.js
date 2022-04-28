// 구조분해 할당
// 구조화된 배열과 같은 이터러블 혹은 객체를 구조분해하여 1개이상의 변수에 개별적으로 할당하는 것
// 배열 디스트럭처링 할당의 대상은 이터러블이여야 하며 할당 기준은 배열의 인덱스이다.

const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three); // 1,2,3

const [x, y] = [1, 2];
console.log(x, y);

const [a, b] = [1, 2];
console.log(a, b); // 1,2

const [c, d] = [1];
console.log(c, d); // 1,undefined

const [e, f] = [1, 2, 3];
console.log(e, f); // 1,2

//객체 디스트럭처링 할당
const user = { firstname: 'jh', secondname: 'kim' };
const { secondname: sn, firstname: fs } = user;
console.log(sn, fs); // kim jh

const name = { id: 'jh', num: 1 };
const { id: i, num: n } = name;
console.log(i, n); // jh 1
