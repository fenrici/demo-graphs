var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };
  
  // As options we currently only set a static size of 300x200 px
  var options = {
    width: '600px',
    height: '500px'
  };
  
  // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
  new Chartist.Line('.ct-chart', data, options);
  
  async function getmoviesInfo (){
  let getMovies = await fetch('https://swapi.dev/api/films/')
  let movies= await getMovies.json()
  let title = movies.title
  console.log(movies);
  return movies
  }
 getmoviesInfo()

getmoviesInfo().then(movies => {
    const labels = movies.results.map(movie => movie.title);
    const series = [movies.results.map(movie => parseInt(movie.release_date.split('-')[0]))];

    const updatedData = {
        labels: labels,
        series: series
    };

    new Chartist.Line('.ct-chart', updatedData, options);
});

var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };
  
  // As options we currently only set a static size of 300x200 px
  var options = {
    width: '600px',
    height: '500px'
  };
  
  // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
  new Chartist.Line('.cT-chart', data, options);
  
async function getCharactersInfo() {
    let response = await fetch('https://swapi.dev/api/people/');
    let characters = await response.json();

    const labels = characters.results.map(character => character.name);
    const series = [characters.results.map(character => character.films.length)];

    const barChartData = {
        labels: labels,
        series: series
    };

    const barChartOptions = {
        width: '600px',
        height: '500px',
        axisY: {
            onlyInteger: true
        }
    };

    new Chartist.Bar('.cT-chart', barChartData, barChartOptions);
}

getCharactersInfo();