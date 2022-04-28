const str = 'Hello';
// 스트링 래퍼 객체로부터 length 프로퍼티만 추출한다.
const { length } = str;
console.log(length); // 5

// 객체를 인수로 전달받는 매개변수 todo에 구조분해할당을 사용
function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`
  );
}

printTodo({ id: 1, content: 'HTML', completed: true });

//배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

const todos = [
  { id1: 1, content: 'HTML', completed: true },
  { id2: 2, content: 'HTML', completed: true },
  { id3: 3, content: 'HTML', completed: true },
];

const [{ id1 }, { id2 }, { id3 }] = todos; // todos배열의 2번째 요소인 객체로부터 id 프로퍼티만 추출
console.log(id1);
console.log(id2);
console.log(id3);
