import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              //mentors의 name, title 각 아이템을 mentor이라고 칭한다.
              if (mentor.name == prev) {
                return { ...mentor, name: current }; //mentor을 그대로 유지하고(...), name은 current로 바꾼다.
              }
              return mentor; //prev랑 이름이 같지 않은 아이템을 그대로 기존이름 유지하자
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const prev = prompt(`누구의 직책을 바꾸고 싶은가요?`);
          const current = prompt(`직책을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              //mentors의 name, title 각 아이템을 mentor이라고 칭한다.
              if (mentor.name == prev) {
                return { ...mentor, title: current }; //mentor을 그대로 유지하고(...), title은 current로 바꾼다.
              }
              return mentor; //prev랑 이름이 같지 않은 아이템을 그대로 기존이름 유지하자
            }),
          }));
        }}
      >
        멘토의 직책 바꾸기
      </button>

      <button
        onClick={() => {
          const deleteName = prompt(`삭제하실 멘토 이름을 입력해주세요.`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter(
              (mentor) => mentor.name !== deleteName
            ), //deleteName과 같지 않은 이름만 필터링해서 남겨준다.
          }));
        }}
      >
        삭제
      </button>

      <button
        onClick={() => {
          const addName = prompt(`추가하실 멘토 이름을 입력해주세요.`);
          const addTitle = prompt(`추가하실 멘토 직책을 입력해주세요.`);
          setPerson((person) => ({
            ...person,
          mentors: [...person.mentors, {name:addName, title:addTitle}]   //mentors의 배열을 하나하나씩 풀어서 가져오고, {}추가한다.
          }));
        }}
      >
        추가
      </button>
    </div>
  );
}
