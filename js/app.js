const selectAll = document.querySelector(".all");
const sort = document.querySelector(".sorted");
const search = document.querySelector(".search");
const module_image = document.querySelector(".module-image");
const module_genre = document.querySelector(".module-genre");
const description = document.querySelector(".description");
const module_see = document.querySelector(".module-see");
const closeBtn = document.querySelector(".close");
const mod = document.querySelector(".mod");
const info = document.querySelectorAll(`.info`);
let submit = document.querySelector(".submit");
let KEY = "58ed228a";

async function getApi(search, key) {
  let data = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${search}`)
    .then((res) => res.json())
    .then((data) => data.Search)
    .catch((error) => console.log(error));
  console.log(data);
  box.innerHTML = null;
  data.forEach(film => {
    createCard(film.Poster, film.Title, film.Year, film.imdbID);
  });
  // info.addEventListener('click', (e) => {
  //     module_genre.innerHTML = "";
  //     let card = data.find((item) => {
  //       return item.imdbID == e.target.dataset.id;
  //     });
  //     module_image.src = card.Poster;
  //     let createLi = document.createElement("li");
  //     createLi.textContent = card.Type;
  //     module_genre.append(createLi);
  //     description.textContent = card.Title;
  //     module_see.href = card.Poster;
  //     mod.style.display = "flex";
  //   });
  // closeBtn.addEventListener("click", () => {
  //   mod.style.display = "none";
  // });
}

submit.addEventListener("click", () => {
  box.innerHTML = `<div class="spinner-border text-danger m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  getApi(search.value, KEY);
  search.value = "";
})



