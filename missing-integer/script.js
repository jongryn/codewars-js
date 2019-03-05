// This is a demo task.

// Write a function:

// int solution(int A[], int N);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// printf("this is a debug message\n");

/*
int solution(int A[], int N) {
    // write your code in C99 (gcc 6.2.0)
}
*/

function solution(a) {
    const length = a.length;
    const map = Array(length).fill(false);
    for (let i = 0; i < length; i++) {
        const item = a[i];
        if (item < 1 || item > length) {
            continue;
        }
        map[item - 1] = true; 
    }
    for (let i = 0; i < length; i++) {
        if (!map[i]) {
            return i + 1;
        }
    }
    return length + 1;
}
// assert.strictEqual(solution[2, 4, 5], 1);
console.log(solution([2, 4, 5]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
