const url = 'https://api.github.com/users/facebook'

function promise(u) {
    return fetch(u).then(response => response.json())
}

promise(url).then(data => console.log(data));

// 2

function fetchData(endpoint) {
    return fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
    });
}    
fetchData('https://api.github.com/users/facebook')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });
