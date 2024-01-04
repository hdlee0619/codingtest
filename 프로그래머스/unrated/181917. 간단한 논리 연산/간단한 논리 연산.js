function handleAnd(a, b) {
    return a && b;
}

function handleOr(a, b) {
    return a || b;
}

function solution(x1, x2, x3, x4) {
    const a = handleOr(x1, x2);
    const b = handleOr(x3, x4);
    
    return handleAnd(a, b);
}