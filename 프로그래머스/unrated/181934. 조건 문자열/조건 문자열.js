function solution(ineq, eq, n, m) {
    const isInEqual = ineq === "<";
    const isEqual = eq === "=";
    
    if (isEqual) {
        if (isInEqual) {
            return n <= m ? 1 : 0;
        } else {
            return n >= m ? 1 : 0;
        }
    } else {
        if (isInEqual) {
            return n < m ? 1 : 0;
        } else {
            return n > m ? 1: 0;
        }
    }
}