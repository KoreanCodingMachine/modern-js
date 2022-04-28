//JSON.parse 메서드 -> JSON포맷의 문자열을 객체로 변환 -> 서버에서 받아온 데이터를 클라이언트에서 객체로서 사용하기 위해

const obj = {
  name: 'lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
// object { name: 'lee', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] }

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 1, content: 'HTML', completed: false },
  { id: 1, content: 'HTML', completed: false },
];

// 배열이 JSON포맷의 문자열로 변환되어있는 경우  JSON.parse는 문자열을 배열 객체로 변환한다.
// 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.

const json2 = JSON.stringify(todos);
const parsed2 = JSON.parse(json2);
console.log(typeof parsed2, parsed2);

// object [
//   { id: 1, content: 'HTML', completed: false },
//   { id: 1, content: 'HTML', completed: false },
//   { id: 1, content: 'HTML', completed: false }
// ]
