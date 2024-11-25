import { useState } from 'react';
import './App.css';
import data from './assets/movies.json';

function App() {
  const [likes, setLikes] = useState(0); // Umumiy likes
  const [likedCards, setLikedCards] = useState({}); // Cardlarga oid like ma'lumotlari

  const toggleLike = (index) => {
    setLikedCards((prevLikedCards) => {
      const updatedLikedCards = { ...prevLikedCards };
      if (updatedLikedCards[index]) {
        delete updatedLikedCards[index];
        setLikes(likes - 1); // Likesni kamaytirish
      } else {
        updatedLikedCards[index] = true;
        setLikes(likes + 1); // Likesni oshirish
      }
      return updatedLikedCards;
    });
  };

  return (
    <>
      <header className="header-container">
        <h2 className="list-of-films">Kino ro'yxati</h2>
        <ul className="ul">
          <li>
            <a href="#">Bosh sahifa</a>
          </li>
          <li>
            <a href="#">Kinolar</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
        <div className="count-like-section">
          <span>{likes}</span>
          <span>likes</span>
        </div>
      </header>
      <section className="movies-section">
        {data.length > 0 ? (
          data.map((movie, index) => (
            <div key={index} className="card">
              <img
                src={movie.Images[0]}
                alt={movie.Title}
                className="movie-image"
              />
              <div
                className={`heart-icon ${
                  likedCards[index] ? 'liked' : ''
                }`}
                onClick={() => toggleLike(index)}
              ></div>
              <h3>{movie.Title}</h3>
              <p>{movie.Plot}</p>
              <div className="general-datas">
                <div>
                  <p>
                    <strong>Yil:</strong> {movie.Year}
                  </p>
                  <p>
                    <strong>Reyting:</strong> {movie.Rated}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Chiqarilgan sana:</strong> {movie.Released}
                  </p>
                  <p>
                    <strong>Davomiyligi:</strong> {movie.Runtime}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Janr:</strong> {movie.Genre}
                  </p>
                  <p>
                    <strong>Rejisyor:</strong> {movie.Director}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Yozuvchi:</strong> {movie.Writer}
                  </p>
                  <p>
                    <strong>Aktyorlar:</strong> {movie.Actors}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Til:</strong> {movie.Language}
                  </p>
                  <p>
                    <strong>Mamlakat:</strong> {movie.Country}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Mukofotlar:</strong> {movie.Awards}
                  </p>
                  <p>
                    <strong>IMDb reytingi:</strong> {movie.imdbRating}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Kino topilmadi</p>
        )}
      </section>
    </>
  );
}

export default App;
