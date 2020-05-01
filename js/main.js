//import { Repos } from ".githubapi.js";
//import { Repos } from "./githubapi.js";
window.onload = () => {
  /*	download CV
   ------------------------------------------------------ */

  document.getElementById("downloadCV").addEventListener("click", download);
  function download(e) {
    fetch("https://my-json-server.typicode.com/ShtankoDaria/demo/db")
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "MyCV.txt";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file is downloaded!");
      })
      .catch(() => alert("oh no!"));
  }
  /*  get repos from GitHub
  
  ---------------------------------------------------- */

  //   document.getElementById("getRepos").addEventListener("click", getRepos);
  //   debugger;
  //   function getRepos(e) {
  //     e.preventDefault();

  //     //const reposId = document.getElementById("reposId").value;
  //     const repos = new Repos();
  //     repos
  //       .getRepos()
  //       .then((res) => res.json())
  //       .then((repos) => {
  //         return new Repos(repos);
  //       });

  //     return this;
  //     //const container = repos.render();
  //     //document.getElementById("root").appendChild(container);
  //   }

  document.getElementById("btnRepos").onclick = (event) => {
    //debugger;
    fetch("https://api.github.com/users/ShtankoDaria/repos?per_page=50")
      .then((resp) => resp.blob())
      .then((blob) => {
        const link = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(link);
        // .then((res) => res.json())
        // .then((repoData) => {
        //   console.log("repos data from github", repoData.url);
        //   return new Repos(repoData);
        // })
      })
      // .then((pokemon) => {
      //   console.log("new github instance", pokemon);
      //   const view = pokemon.render();
      //   document.getElementById("root").appendChild(view);
      // })
      .catch(() => alert("Something went wrong!"));
  };
  // const btnRepos = document.getElementById("btnRepos");
  // btnRepos.addEventListener("click", getRepos);
  // function getRepos(e) {
  //   //     e.preventDefault();
  //   const repos = new Repos();
  //   return i.html_url;
  // }
  // async function getRepos() {
  // 	clear();
  // 	const url = "https://api.github.com/search/repositories?q=stars:150000..300000"
  // 	const response = await fetch(url)
  // 	const result = await response.json()
  // 	result.items.forEach(i => {

  // 		const anchor = document.createElement("a")
  // 		anchor.href = i.html_url;
  // 		anchor.textContent = i.full_name;
  // 		divResult.appendChild(anchor)
  // 		divResult.appendChild(document.createElement("br"))

  // 	})
  // }
  //   document.getElementById("duckDuckGo").addEventListener("click", duckRepo);
  //   async function duckRepo() {
  //     const url = "https://api.github.com/repos/ShtankoDaria/duck-duck-clone";
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     result.href = html_url;
  //   }

  /*	contact form
	------------------------------------------------------ */

  document
    .getElementById("contactForm")
    .addEventListener("submit", contactForm);
  function contactForm(e) {
    e.preventDefault();

    let contactSubject = document.getElementById("contactSubject").value;
    let contactMessage = document.getElementById("contactMessage").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        contactSubject: contactSubject,
        contactMessage: contactMessage,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};
