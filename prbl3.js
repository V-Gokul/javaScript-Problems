/* n this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints
1<n < 10
0< ar[i] < 10^10

Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015

Note:

The range of the 32-bit integer is
(-2^31) to (2^31 -1) or [-2147483648,2147483647]
When we add several integer values, the resulting sum might exceed the above range. */

function aVeryBigSum(ar) {
  let sum = BigInt(0);
  console.log(",,,,,,,,", Number(sum));
  for (let i = 0; i < ar.length; i++) {
    console.log(i);
    sum = sum + BigInt(ar[i]);
  }
  return Number(sum);
}
const array = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006,
];
const result = aVeryBigSum(array);

console.log(result);
