using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Kulendayz.Controllers
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsWatched { get; set; }
    }

    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        [HttpGet]
        public IEnumerable<Movie> GetAllMovies()
        {
            return new[]
            {
                new Movie {
                    Id =  1,
                    IsWatched =  true,
                    Title =  "Matrix 1"
                },
                new Movie{
                    Id =  2,
                    IsWatched =  true,
                    Title =  "Matrix 2"
                },
                new Movie{
                    Id =  3,
                    IsWatched =  true,
                    Title =  "Matrix 3"
                },
                new Movie{
                    Id =  4,
                    IsWatched =  false,
                    Title =  "Twilight"
                }
            };
        }
    }
}
