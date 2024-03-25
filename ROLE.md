# 코딩 규칙
https://snakehips.tistory.com/85

1. 팀원들끼리 npm 버전 통일
2. ESLint, Prettier extenstion을 설치하여 코드 스타일 및 포맷 맞추기
3. 반복되는 코드는 컴포넌트로 만들어서 재사용할 것
4. 코드에 색상코드는 직접 넣지 말고 따로 상수화 해서 불러오기
5. 변수명, 함수명 등을 직관적으로 명명해주고 필히 camelCase적용하기
6. 개발중 팀원이 패키지를 설치해서 push해놓은걸 pull로 땡겨 build하면 오류가 발생한다
   <br>=> npm install이 아닌 npm ci명령어를 이용하여 패키지 로드할것( install시 package-lock.json파일이 갱신되어 꼬여버릴수있음)


# 커밋 규칙
커밋시 메세지 헤드에 다음단어를 붙힌다.
* (feat)  : 새로운 기능 추가
* (fix) : 버그수정
* (docs) : 문서수정
* (style) : 코드포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
* (refactor) : 코드 리펙토링
* (test) : 테스트코드, 리펙토링 테스트 코드 추가
* (chore) : 빌드 업무 수정, 패키지 매니저 수정