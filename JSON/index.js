//JSON.stringfy -> 객체를 JSON 포맷의 문자열로 변환
//클라이언트가 서버로 객체를 전송하려면 객체를 문자열화 해야한다. -> 직렬화
//JSON.stringgy method를 통해서 서버에게 전송할 준비가 완료

const obj = {
  name: 'lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
//string {
//     "name": "lee",
//     "age": 20,
//     "alive": true,
//     "hobby": [
//       "traveling",
//       "tennis"
//     ]
//   }

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 1, content: 'HTML', completed: false },
  { id: 1, content: 'HTML', completed: false },
];

const json2 = JSON.stringify(todos);
console.log(typeof json2, json2);
// string [{"id":1,"content":"HTML","completed":false},{"id":1,"content":"HTML","completed":false},{"id":1,"content":"HTML","completed":false}]
