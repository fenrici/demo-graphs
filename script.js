
  async function getmoviesInfo (){
    try {
      let getMovies = await fetch('https://swapi.dev/api/films/');
      let movies = await getMovies.json();
      let title = movies.title;
      console.log(movies);
      return movies;
    } catch (error) {
      console.log(error);
    }
  }
 getmoviesInfo()

getmoviesInfo().then(movies => {
    const labels = movies.results.map(movie => movie.title);
    const series = [movies.results.map(movie => parseInt(movie.release_date.split('-')[0]))];

    const updatedData = {
        labels: labels,
        series: series
    };
    const options = {
        width: '500px',
        height: '500px',
        axisY: {
          onlyInteger: true
      }
      };

    new Chartist.Line('.ct-chart', updatedData, options);
});
  
async function getCharactersInfo() {
    try {
        let response = await fetch('https://swapi.dev/api/people/');
        let characters = await response.json();

        const labels = characters.results.map(character => character.name);
        const series = [characters.results.map(character => character.films.length)];

        const barChartData = {
            labels: labels,
            series: series
        };

        const barChartOptions = {
            width: '500px',
            height: '500px',
            axisY: {
                onlyInteger: true
            }
        };

        new Chartist.Bar('.cT-chart', barChartData, barChartOptions);
    } catch (error) {
        console.log(error);
    }
}
getCharactersInfo();