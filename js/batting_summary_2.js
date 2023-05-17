/* ----- STAGE 1 ----- */

// ----- Interaction Code ------ //
navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament')
//our target website where we will be drawing our info from 

let links = parse().matchSummaryLinks;
// Variables defined with let can not be redeclared, let items cannot be accessed outside of the block, let blocks scope in javascript
for(let i of links) {
    next_stage({url: i})
}

// --- Parser Code --- //
let links = []
const allRows = $('table.engineTable > tbody > tr.data1');
 allRows.each((index, element) =>{
  const tds = $(element).find('td');
  const rowURL = "https://www.espncricinfo.com" +$(tds[6]).find('a').attr('href');
  links.push(rowURL);
 })
return {
    'matchSummaryLinks': links
};

/* -- Stage 2 -- */

//--- Interaction Code ---///
navigate(inout.url);
collect(parse());