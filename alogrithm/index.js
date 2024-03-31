const input = prompt()
const arr = input.split(" ").map(Number)

function miniMaxSum(arr) {
    let min_value = Infinity
    let max_value = -Infinity
    let sum_all = 0
    for(let number of arr) {
        if (number > max_value) {
            max_value = number
        }
        if (number < min_value) {
            min_value = number
        }
        sum_all += number
    }
    let sum_min = sum_all - max_value
    let sum_max = sum_all - min_value
    console.log(sum_min, sum_max)
}
miniMaxSum(arr)