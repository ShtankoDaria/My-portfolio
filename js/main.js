import { Repos } from "./githubapi.js";

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

  document.getElementById("btnRepos").onclick = (event) => {
    const repos = new Repos();
    repos.getRepos().then(() => {
        const root = document.getElementById('repositoryRoot');
        root.innerHTML = '';
        root.appendChild(repos.render());
    })
  };

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
