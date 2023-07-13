
function print_even(num) {
    for(let i = 0; i <= num; i+= 2){
        console.log(i + " ")
    }
}

// print_even(20)
// print_even(5)

// console.log("\n")

//  tabulized method (does not need array)
//  always includes the 0th term, therefore prints n+1 times 
function print_fib(n) {
    if (n < 0) return

    console.log(0)

    let term = 1
    let prev = 1
    let prev_prev = 0

    for(let i = 1; i <= n; ++i){
        console.log(term)
        term = prev + prev_prev
        
        prev_prev = prev;
        prev = term;
    }
}

// print_fib(0)
// console.log("\n")
// print_fib(1)
// console.log("\n")
// print_fib(5)


// helper for reverse_num
function num_digits(n) {
    let str = n.toString()
    return str.length
}

function reverse_num(num) {
    n_digits = num_digits(num)

    let reverse = 0;
    for(let i = 1; i <= n_digits; i++) {
        let reverse_digit = num % 10
        reverse += reverse_digit * Math.pow(10, n_digits - i)
        num = Math.trunc(num / 10)
    }
    return reverse
}

// console.log(reverse_num(345))
// console.log(reverse_num(9))

//  helper for sort
function swap(array, i, j) {
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

//  implements selection sort
function sort_num_array(array) {
    for(let i = 0; i < array.length; i++) {
        curr_min_index = i
        for(let j = i; j < array.length; j++){
            if(array[j] < array[curr_min_index]) {
                curr_min_index = j
            }
        }
        swap(array, i, curr_min_index)
    }
}

//  implements selection sort
function sort_string_array(array) {
    for(let i = 0; i < array.length; i++) {
        curr_min_index = i
        for(let j = i; j < array.length; j++){
            if(array[j].localeCompare(array[curr_min_index]) === -1) {
                curr_min_index = j
            }
        }
        swap(array, i, curr_min_index)
    }
}

// arr = [2, 6, 5, 1]
// console.log(arr)
// sort_num_array(arr)
// console.log(arr)

// arr = ["aaaa", "aa", "bb", "cc", "ddddd", "ccc"]
// console.log(arr)
// sort_string_array(arr)
// console.log(arr)

function capitalize_words(str) {
    let words = str.split(" ")
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    console.log(words.join(" "))
    return words.join(" ")
}

// let str = "hello, my name is Mark"
// str = capitalize_words(str)
// console.log(str)

function city_to_postal_code(city) {
    switch (city) {
        case "Brighton":
            return 48116
        case "Cape Town":
            return 99999
        default:
            console.log("Not a valid city!")
            return -1
    }
}

function return_occurences(str, ch) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === ch) count++
    }
    return count
}

// console.log(return_occurences("aaaaa", "a"))
// console.log(return_occurences("aaaaa", "b"))

// function filter_str_arr(array, str) {
//     array = array.filter((target) => {
//         return str !== target
//     });
// }

//  filter both a word and num from respective arrays
function filter_word(array, target) {
    let filtered = array.filter(x => x !== target)
    return filtered
}

// function filter_num_arr(array, num) {
//     array = array.filter((x) => {
//         return x !== num;
//     });
// }


// function filter_obj_arr(array, obj_id){
//     array = array.filter((obj) => {
//         return obj.id !== obj_id
//     });
// }

function filter_obj_by_id(array, id_value) {
    let filtered = arr.filter(x => x.id !== id_value)
}

function find_obj_by_id(array, id_value) {
    let obj = arr.find(x => x.id === id_value)
    return obj
}

function print_date() {
    let date = new Date()
    console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
}

// print_date()


//  return_heigher_than_10 helper
// function pass_test(obj) {
//     keys = obj.keys()
//     for(let i = 0; i < keys.length; i++){
//         if(obj.(keys[i]) > 10) return true;
//     }
//     return false;
// }

// function return_higher_than_ten(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(pass_test(array[i])){

//         }
//     }
// }

function filer_by_larger_than(array, val_to_filer) {
    let filtered = arr.filter(x => x.sample_key > val_to_filter)
    return filtered
}