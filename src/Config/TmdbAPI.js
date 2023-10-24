const API_KEY = 'd1cb03bc2f7b636e6832f5cc0153f71d';

const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?&api_key=${API_KEY}&language=en-en`;

const API_IMG = 'https://image.tmdb.org/t/p/w780/';

const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-es`;

const SERIES_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=es-es`;

const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-es`;

const MOVIES_DETAIL = `https://api.themoviedb.org/3/movie/`;

const SERIES_DETAIL = `https://api.themoviedb.org/3/tv/`;

const MOVIES_SEARCH = 'https://api.themoviedb.org/3/search/movie?';

const SERIES_SEARCH = 'https://api.themoviedb.org/3/search/tv?';

export {
	MOVIES_URL,
	API_IMG,
	UPCOMING_URL,
	SERIES_URL,
	GENRES_URL,
	API_KEY,
	MOVIES_DETAIL,
	SERIES_DETAIL,
	MOVIES_SEARCH,
	SERIES_SEARCH,
};
