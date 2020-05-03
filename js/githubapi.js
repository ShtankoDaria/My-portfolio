class Repos {
  repositories = [];

  getRepos() {
    const url = "https://api.github.com/users/ShtankoDaria/repos?per_page=50";
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.repositories = data;
        return this;
      });
  }

  render() {
    const container = document.createElement("div");

    console.log(this.repositories);

    this.repositories.map(repository => {
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="col-six">
            <h6>${repository.name}</h6>
            <p>
              ${repository.description}
            </p>
          </div>
      `;
      container.appendChild(div);
    })

    return container;
  }
}

export { Repos };
