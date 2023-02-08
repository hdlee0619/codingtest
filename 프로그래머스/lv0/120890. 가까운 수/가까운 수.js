/*
1. map과 Math.abs(a-n)을 사용해 절대값을 배열에 새로 담고
2. 그 배열에서 가장 작은 값을 찾아낸다
3. 만약 그 값이 filter 내장함수에서 실행한 절대값과 같다면 (여기서filter 내장함수에서는 array에서 빼줌)
4. filter로 같은 값만 배열로 반환해주고
5. sort로 정렬한 다음 인덱스 0번을 return
*/

const solution = (array, n) => {
    return +array.filter(a => Math.abs(a-n) === Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b) => a-b)[0]
}