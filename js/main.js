document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

    const navbarForm = document.querySelector('.navbar-form');
    const navbarFormCloseBtn = document.querySelector('.navbar-form-close'); 
    const navbarSearchBtn = document.querySelector('.navbar-search-btn');
    const loadMoreBtn = document.querySelector('.load-more');
    const loginLink = document.querySelector('.navbar-signin');

    const genreSelect = document.getElementById('genre');
    const movieCards = document.querySelectorAll('.movie-card');

    const form = document.getElementById('year-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const year = document.getElementById('year-input').value;
        
        fetch('../js/peliculas.json')
            .then(response => response.json())
            .then(data => {
                const movie = data.find(movie => movie.releaseYear === parseInt(year));
                
                if (movie) {
                    Swal.fire({
                        title: `Película ganadora de ${year}`,
                        html: `<strong>${movie.name}</strong>`,
                        icon: 'success',
                        background: '#1b1b1b',
                        color: '#ffd700',
                        confirmButtonColor: '#ffd700'
                    });
                } else {
                    Swal.fire({
                        title: `No se pudo encontrar una película ganadora en ${year}`,
                        icon: 'error',
                        background: '#1b1b1b',
                        color: '#ffd700',
                        confirmButtonColor: '#ffd700'
                    });
                }
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al cargar el archivo JSON.',
                    icon: 'error',
                    background: '#1b1b1b',
                    color: '#ffd700',
                    confirmButtonColor: '#ffd700'
                });
            });
    });
    

    function navIsActive(){
        header.classList.toggle('active');
        nav.classList.toggle('active');
        navbarMenuBtn.classList.toggle('active');
    }

    navbarMenuBtn.addEventListener('click', navIsActive);

    const searchBarIsActive = () => navbarForm.classList.toggle('active');
    navbarSearchBtn.addEventListener('click', searchBarIsActive);
    navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

    const peliculas = [
        {
            titulo: "The Godfather",
            año: 1972,
            img: "../assets/movies/padrino.webp",
            genero: "Crimen, Drama",
            duracion: "175 min",
            rating: "4.4",
            sinopsis: "La historia épica de la familia mafiosa Corleone en Nueva York, liderada por el patriarca Don Vito Corleone y su hijo Michael, quien intenta alejarse del crimen familiar."
        },
        {
            titulo: "Rocky",
            año: 1976,
            img: "../assets/movies/rocky.webp",
            genero: "Drama, Deporte",
            duracion: "120 min",
            rating: "4.4",
            sinopsis: "Un boxeador desconocido, Rocky Balboa, recibe la oportunidad de enfrentarse al campeón del mundo, Apollo Creed, desafiando las probabilidades para alcanzar la gloria."
        },
        {
            titulo: "Kramer vs. Kramer",
            año: 1979,
            img: "../assets/movies/kramer.jpg",
            genero: "Drama",
            duracion: "105 min",
            rating: "4.4",
            sinopsis: "Tras el repentino abandono de su esposa, Ted Kramer debe aprender a cuidar de su hijo solo, enfrentando desafíos emocionales y legales inesperados."
        },
        {
            titulo: "Gandhi",
            año: 1982,
            img: "../assets/movies/gandhi.jpg",
            genero: "Biografía, Drama",
            duracion: "191 min",
            rating: "4.4",
            sinopsis: "La vida y los logros de Mahatma Gandhi, líder pacifista de la India, en su lucha no violenta por la independencia de su país del dominio británico."
        },
        {
            titulo: "Amadeus",
            año: 1984,
            img: "../assets/movies/amadeus.jpg",
            genero: "Biografía, Drama",
            duracion: "160 min",
            rating: "4.4",
            sinopsis: "La rivalidad entre el compositor Antonio Salieri y el joven prodigio Wolfgang Amadeus Mozart, explorando la genialidad, la envidia y el arte."
        },
        {
            titulo: "Rain Man",
            año: 1988,
            img: "../assets/movies/rainman.webp",
            genero: "Drama",
            duracion: "133 min",
            rating: "4.4",
            sinopsis: "Un hombre egoísta descubre que su hermano, autista y con habilidades prodigiosas, puede cambiar su vida mientras viajan juntos por los Estados Unidos."
        },
        {
            titulo: "Dances with Wolves",
            año: 1990,
            img: "../assets/movies/dances.webp",
            genero: "Aventura, Drama, Western",
            duracion: "181 min",
            rating: "4.4",
            sinopsis: "Un soldado de la Unión destinado en el oeste americano desarrolla un profundo respeto por la cultura de los nativos americanos, desafiando sus propios prejuicios."
        },
        {
            titulo: "Forrest Gump",
            año: 1994,
            img: "../assets/movies/forrest.webp",
            genero: "Drama, Romance",
            duracion: "142 min",
            rating: "4.4",
            sinopsis: "Forrest Gump, un hombre con discapacidad intelectual pero corazón puro, vive una vida extraordinaria, influenciando sin saberlo los eventos más importantes de su época."
        },
        {
            titulo: "Braveheart",
            año: 1995,
            img: "../assets/movies/braveheart.jpg",
            genero: "Biografía, Drama, Historia",
            duracion: "178 min",
            rating: "4.4",
            sinopsis: "William Wallace lidera una revuelta contra la opresión inglesa en Escocia, luchando por la libertad y enfrentándose a traiciones y batallas épicas."
        },
        {
            titulo: "Gladiator",
            año: 2000,
            img: "../assets/movies/gladiator.webp",
            genero: "Acción, Aventura, Drama",
            duracion: "155 min",
            rating: "4.4",
            sinopsis: "Un general romano traicionado por el hijo del emperador se convierte en gladiador, buscando venganza mientras lucha por restaurar su honor y libertad."
        },
        {
            titulo: "A Beautiful Mind",
            año: 2001,
            img: "../assets/movies/mind.webp",
            genero: "Biografía, Drama",
            duracion: "135 min",
            rating: "4.4",
            sinopsis: "La historia del brillante matemático John Nash, quien lucha contra la esquizofrenia mientras hace descubrimientos revolucionarios en teoría de juegos."
        },
        {
            titulo: "Chicago",
            año: 2002,
            img: "../assets/movies/chicago.jpg",
            genero: "Comedia, Crimen, Drama",
            duracion: "113 min",
            rating: "4.4",
            sinopsis: "En la glamorosa era del jazz en Chicago, dos mujeres buscan la fama y la absolución tras cometer asesinatos, usando su encanto y habilidades legales."
        },
        {
            titulo: "Million Dollar Baby",
            año: 2004,
            img: "../assets/movies/milliondollar.webp",
            genero: "Drama, Deporte",
            duracion: "132 min",
            rating: "4.4",
            sinopsis: "Una joven boxeadora, entrenada por un viejo entrenador desilusionado, lucha no solo por el título, sino por encontrar significado en su vida y en su relación."
        },
        {
            titulo: "The Departed",
            año: 2006,
            img: "../assets/movies/departed.webp",
            genero: "Crimen, Drama, Suspenso",
            duracion: "151 min",
            rating: "4.4",
            sinopsis: "En Boston, un infiltrado de la policía y un espía en la mafia descubren que sus vidas están entrelazadas en una red de engaños, traiciones y peligro mortal."
        },
        {
            titulo: "The King's Speech",
            año: 2010,
            img: "../assets/movies/thekings.webp",
            genero: "Biografía, Drama",
            duracion: "118 min",
            rating: "4.4",
            sinopsis: "El rey Jorge VI de Inglaterra, con la ayuda de un terapeuta poco convencional, supera su tartamudez para liderar a su país en tiempos de crisis."
        },
        {
            titulo: "12 Years a Slave",
            año: 2013,
            img: "../assets/movies/12years.jpg",
            genero: "Biografía, Drama, Historia",
            duracion: "134 min",
            rating: "4.4",
            sinopsis: "Basada en una historia real, un hombre negro libre es secuestrado y vendido como esclavo en el sur de Estados Unidos, enfrentando brutalidad y luchando por su libertad."
        },
        {
            titulo: "Birdman",
            año: 2014,
            img: "../assets/movies/birdman.jpg",
            genero: "Comedia, Drama",
            duracion: "119 min",
            rating: "4.4",
            sinopsis: "Un actor famoso por interpretar a un superhéroe lucha por revivir su carrera en Broadway mientras enfrenta su ego y la crítica del mundo del espectáculo."
        },
        {
            titulo: "Spotlight",
            año: 2015,
            img: "../assets/movies/spotlight.jpg",
            genero: "Biografía, Crimen, Drama",
            duracion: "128 min",
            rating: "4.4",
            sinopsis: "El equipo periodístico de Spotlight del Boston Globe investiga y expone el encubrimiento sistemático de abusos sexuales por parte de la Iglesia Católica en Boston."
        }
    ];

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkIcons = document.querySelectorAll('.bookmark ion-icon');

    
    function updateLocalStorage(bookmarks) {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    
    function toggleBookmark(e) {
        const movieCard = e.target.closest('.movie-card');
        const movieTitle = movieCard.querySelector('.card-title').textContent;

        if (bookmarks.includes(movieTitle)) {
            
            const index = bookmarks.indexOf(movieTitle);
            bookmarks.splice(index, 1);
            e.target.style.color = '';
        } else {
            
            bookmarks.push(movieTitle);
            e.target.style.color = 'yellow';
        }

        updateLocalStorage(bookmarks);
    }

    
    function showAllMovies() {
        const moviesGrid = document.querySelector('.movies-grid');
        moviesGrid.innerHTML = ''; 
    
        peliculas.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <div class="card-head">
                    <img src="${movie.img}" alt="" class="card-img" data-index="${movie.titulo}">
                    <div class="card-overlay">
                        <div class="bookmark">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        <div class="rating">
                            <ion-icon name="star-outline"></ion-icon>
                            <span>${movie.rating}</span>
                        </div>
                        <div class="play">
                            <ion-icon name="play-circle-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${movie.titulo}</h3>
                    <div class="card-info">
                        <span class="genre">${movie.genero}</span>
                        <span class="year">${movie.año}</span>
                    </div>
                </div>
            `;
            moviesGrid.appendChild(movieCard);

            
            const bookmarkIcon = movieCard.querySelector('.bookmark ion-icon');
            if (bookmarks.includes(movie.titulo)) {
                bookmarkIcon.style.color = 'yellow';
            }

            
            bookmarkIcon.addEventListener('click', toggleBookmark);
        });
    }

    
    function showSavedMovies() {
        const moviesGrid = document.querySelector('.movies-grid');
        moviesGrid.innerHTML = ''; 

        bookmarks.forEach(bookmark => {
            const movie = peliculas.find(movie => movie.titulo === bookmark);
            if (movie) {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <div class="card-head">
                        <img src="${movie.img}" alt="" class="card-img" data-index="${movie.titulo}">
                        <div class="card-overlay">
                            <div class="bookmark">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div class="rating">
                                <ion-icon name="star-outline"></ion-icon>
                                <span>${movie.rating}</span>
                            </div>
                            <div class="play">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${movie.titulo}</h3>
                        <div class="card-info">
                            <span class="genre">${movie.genero}</span>
                            <span class="year">${movie.año}</span>
                        </div>
                    </div>
                `;
                moviesGrid.appendChild(movieCard);

                
                const bookmarkIcon = movieCard.querySelector('.bookmark ion-icon');
                bookmarkIcon.style.color = 'yellow';
                bookmarkIcon.addEventListener('click', toggleBookmark); 
            }
        });
    }

    
    showAllMovies();

    
    const popularesLabel = document.getElementById('populares');
    popularesLabel.addEventListener('click', () => {
        showAllMovies(); 
    });

    const recientesLabel = document.getElementById('recientes');
    recientesLabel.addEventListener('click', () => {
        showAllMovies(); 
    });

    const savedMoviesLabel = document.getElementById('saved-movies');
    savedMoviesLabel.addEventListener('click', () => {
        showSavedMovies(); 
    });

    
    bookmarks.forEach(title => {
        const movieCard = document.querySelector(`.movie-card .card-img[data-index="${title}"]`).closest('.movie-card');
        const bookmarkIcon = movieCard.querySelector('.bookmark ion-icon');
        bookmarkIcon.style.color = 'yellow';
    });
    loadMoreBtn.addEventListener('click', () => {
        
        Swal.fire({
            title: 'Próximamente...',
            text: 'Más películas estarán disponibles pronto.',
            icon: 'info',
            confirmButtonText: 'Entendido'
        });
    });
    loginLink.addEventListener('click', (event) => {
        event.preventDefault(); 
    
        
        Swal.fire({
            title: 'Oops...',
            text: '¡Esta función estará disponible pronto!',
            icon: 'info',
            confirmButtonText: 'Entendido'
        });
    });

showAllMovies();
});
