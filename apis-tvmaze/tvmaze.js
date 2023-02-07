"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  let res = await axios.get("https://api.tvmaze.com/search/shows", {params: { q: term}});
  console.log(res);

  return res.data;
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    show = show.show;
    if(show.image.medium == undefined){
      show.image.medium = "https://tinyurl.com/tv-missing";
    }

    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.image.medium}" 
              alt="${show.name}" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  console.log(term);
  const shows = await getShowsByTerm(term);
  console.log(shows);
  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

$("#shows-list").on("click", getEpisodesOfShow)

async function getEpisodesOfShow(evt) { 
  let id = $(evt.target).closest(".Show").data("show-id");
  let ep = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  console.log(ep);
  populateEpisodes(ep.data);
}

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) { 
  const $epList = $("#episodes-list")
  $epList.empty();
  
  for(let ep of episodes){
    
    let $li = $(
      `
      <li>
      <b>
        S${ep.season} EP${ep.number}
      </b>

        | ${ep.name}
      </li>
      `
    )
  
    $epList.append($li);
  }

  $episodesArea.show();


}
