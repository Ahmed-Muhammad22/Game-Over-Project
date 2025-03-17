import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const category = link.dataset.category;
        this.getGames(category);
      });
    });
    this.loading = document.querySelector(".loading");
    this.details = document.getElementById('details')
    this.ui = new Ui();
    this.getGames("mmorpg");
  }

  changeActiveLink(link) {
    document.querySelector(".navbar-nav .actives").classList.remove("actives");
    link.classList.add("actives");
  }
  async getGames(cat) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "128e9a9862mshd9d0170852adb41p197cdajsn9d1c66c57cbe",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const res = await api.json();
    this.loading.classList.add("d-none");
    console.log(res);

    this.ui.displayGames(res);
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => {
        this.details.classList.remove('d-none')
        new Details(card.dataset.id);
      })
    })
    
  }
}
