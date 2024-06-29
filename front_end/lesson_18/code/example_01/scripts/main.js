// const fetchRes = fetch('https://api.github.com/users/facebook');
// fetchRes
// .then()
// .catch()
// .finally()

fetch('https://ai.github.com/users/facebook')
.then(
    (response) => {
        console.log(response);
        return response.json();
    },
    // (er) => {
    //     console.log('er 1 ' + er);
    //     return new Error(er);
    // }
)
.catch((error) => {
    console.error('Error', error);
    return new Error(error);
})
.then(
    (data) => {
        console.log(data)
    }
)
.catch(
    (error) => {console.error(error)}
)
.finally(
    () => {console.log('Finally')}
)
console.log("Hello world")
