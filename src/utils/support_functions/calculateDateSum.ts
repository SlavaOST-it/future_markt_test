
function calculateDateSum(date: Date): number {
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0 in JavaScript
    const year = date.getFullYear();

    return day.toString().split('').map(Number)
        .concat(month.toString().split('').map(Number))
        .concat(year.toString().split('').map(Number))
        .reduce((acc, curr) => acc + curr, 0);
}

const today = new Date();
export const dateSum = calculateDateSum(today);