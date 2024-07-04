async function example() {
  // console.log("I am func example");
  return 0;
}
const example02 = async () => {};
// example().then(res => {console.log(res)});

const gitHubFetch = async () => {
  // const response = await fetch('https://api.github.com/users/facebook');
  // const responseForRepos = await fetch('https://api.github.com/users/facebook/repos');
  // const reposOfUser = await responseForRepos.json();
  // const bodyData = await response.json();
  // console.log(bodyData);
  // console.log(reposOfUser);
  // return bodyData.avatar_url;
  try {
    const response = await fetch('https://api.github.com/users/facebook');
    const responseForRepos = await fetch(
      'https://api.github.com/users/facebook/repos'
    );
    const reposOfUser = await responseForRepos.json();
    const bodyData = await response.json();
    console.log(bodyData);
    console.log(reposOfUser);
    return bodyData.avatar_url;
  } catch(error) {
    console.log('Ошибка' + error)
  } finally {
    console.log()
  }
};

gitHubFetch().then((data) => {
  console.log(data + '   ===   опять');
});

console.log('main code');
