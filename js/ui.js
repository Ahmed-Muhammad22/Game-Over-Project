export class Ui {
  constructor() {}

  displayGames(data) {
    let cartoona = "";
    for (let i = 0; i < data.length; i++) {
      cartoona += `
         
        <div class="col-md-6 col-lg-4 col-xl-3">
                  <div data-id='${
                    data[i].id
                  }' class="card card h-300  bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    
                    <div class="card-body">
                        <img  class="card-img-top object-fit-cover h-100" src="${
                          data[i].thumbnail
                        }" alt="game image" />
                        <div class="d-flex align-items-center justify-content-between my-2 inner">
                            <h3 class="h6 small">${data[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>
                        <p class="card-text small text-center opacity-50">
                          ${data[i].short_description.split(" ", 8)}
                        </p>
                    </div>
                    <div class="card-footer small d-flex align-items-center justify-content-between">
                    
                        <span class="badge badge-color s1">${
                          data[i].genre
                        }</span>
                        <span class="badge badge-color s2">${
                          data[i].platform
                        }</span>
                    
                    </div>
                  </div>
                  
               </div>
      `;
    }
    document.getElementById("games-body").innerHTML = cartoona;
  }
  displayDetails(data) {
    let cartoona = `
                              <div class="col-md-4">
                                <img class="card-img-top"  src="${data.thumbnail}" alt="game image" />
                               </div>
                               <div class="col-md-8">
                                  <h3>Title: ${data.title}</h3>
                                  <p>Category: <span class="badge text-bg-info"> ${data.category}</span> </p>
                                  <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                                  <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                                <p class="small">
                                ${data.description}
                                    </p>
                                    <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
                               </div>
    `;
    document.getElementById("detailGames").innerHTML = cartoona;
  }
}
