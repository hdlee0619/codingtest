const solution = (str) => {
  let answer = []; // 하나만 있는 문자열을 담을 배열
  let strArray = str.split(''); // 각각 잘라서 배열에 담아줌

  strArray.forEach((item) => {
    // forEach로 각 item마다의 함수 실행
    if (str.indexOf(item) === str.lastIndexOf(item)) {
      // lastIndexOf는 역순으로 탐색하여 최초로 마주치는 인덱스를 반환
      answer.push(item);
    }
  });

  return answer.sort().join('');
};