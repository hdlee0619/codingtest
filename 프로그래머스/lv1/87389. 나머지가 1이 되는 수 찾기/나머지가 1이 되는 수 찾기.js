/* 
접근 방식
1. 나머지가 1이 될 때 까지 나누고 검사를 해봐야하므로 for문을 해본다. 
2. 나머지가 1이 되려면 일단 무조건 자연수 n보다 x가 작아야하고,
  0은 제외가 가능하다. 
 1이 되는 수들을 배열에 놓고 Math.min()을 사용한다. 
*/

const solution = (n) => {
  let array = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      array.push(i);
    }
  }
  return Math.min(...array);
};