import { Ui } from "./ui.js";

export class Details {
  constructor(id) {

    this.loading = document.querySelector(".loading");
    this.getDetails(id)
   }
  
  
  async getDetails(id) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "128e9a9862mshd9d0170852adb41p197cdajsn9d1c66c57cbe",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const res = await api.json();
    this.loading.classList.add("d-none");
    console.log(res);
    new Ui().displayDetails(res)
  
    
  }
}
