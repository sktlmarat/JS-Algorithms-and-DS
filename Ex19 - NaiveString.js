// Find substring inside the longer string

function naiveString(str, sub) {
    let matches = 0;
    for (let index = 0; index < str.length; index++) {
        if (sub.length === matches) {
            return true;
        }
        (str[index] === sub[matches]) ? matches++ : matches = 0;
    }
    return false;
}
