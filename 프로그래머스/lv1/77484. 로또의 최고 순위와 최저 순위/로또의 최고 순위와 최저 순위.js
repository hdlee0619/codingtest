const solution = (lottos, win_nums) => {
    let answer = [];

    // win_nums와 일치하는 수 찾은 배열을 길이로 반환
    const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;

    // 0과 일치하는 수 찾은 배열을 길이로 반환
    const zeros = lottos.filter((lotto) => lotto === 0).length;

    console.log(correct, zeros);

    // 최저 순위는 7에서 맞힌 개수를 뺐을 때, 6보다 크면 맞힌 개수가 0이고
    // 최대 순위는 0의 개수를 빼주었을 때, min이 1보다 작다면 최대 순위가 무조건 1위이고
    // 아니라면 순위애서 0의 개수만큼 빼주어서 순위를 올려준다.
    let min = 7 - correct >= 6 ? 6 : 7 - correct;
    let max = min - zeros < 1 ? 1 : min - zeros;

    answer = [max, min];
    return answer;
};
