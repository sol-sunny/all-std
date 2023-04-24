import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);   //prompt == alert처럼 창이 뜨는데 창에 쓴 값(value)을 네임이라고 하는 변수에 넣고
          setPerson((person) => ({
            ...person,   //person객체는 그대로 변화없이 가되 
            mentor: { ...person.mentor, name: name },  //mentor중에서 나머지도 그대로 가되 mentor.name을 prompt에서 받은 변수 name값으로 바꾼다. key인 mentor의 name과 변수 name의 이름이 같다면 축약가능 name: name >>  name
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
