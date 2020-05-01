class Repos {
  //id = "";

  //constructor(convertedResponse) {
  // Object.assign(this, convertedResponse);
  //}

  //   getRepos() {
  //     //const url = `https://api.github.com/repos/ShtankoDaria/${reposId}`;
  //     const url = `https://api.github.com/repos/ShtankoDaria/duck-duck-clone`;
  //     return fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.id = data.id;
  //         return this;
  //       });
  //   }
  // async function getRepos() {
  //     clear();
  //     const url = "https://api.github.com/users/ShtankoDaria/repos?per_page=50";
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     result.items.forEach(i => {

  // const anchor = document.createElement("a")
  // anchor.href = i.html_url;
  // anchor.textContent = i.full_name;
  // divResult.appendChild(anchor)
  // divResult.appendChild(document.createElement("br"))
  // })
  // }

  //   render() {
  //     const container = document.createElement("div");

  //     container.id = this.id;

  //     return container;
  //   }
  //
  name = "";

  constructor(data) {
    this.name = data.name;
  }

  render() {
    const repos = document.createElement("p");
    repos.innerHTML = this.name;

    const container = document.createElement("div");
    container.appendChild(repos);
    container.id = name;

    return container;
  }
}

//export { Repos };
