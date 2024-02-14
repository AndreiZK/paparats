import React, {
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import "../css/MainPage.scss";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(0);

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      const nextPage = currentPage < 2 ? currentPage + 1 : 0;
      const prevPage = currentPage > 0 ? currentPage - 1 : 2;

      console.log(currentPage);

      console.log(scrollY);

      if (window.scrollY > window.innerHeight * currentPage) {
        setCurrentPage(nextPage);
        window.scrollTo({
          top: window.innerHeight * nextPage,
          behavior: "smooth",
        });
      } else if (window.scrollY < window.innerHeight * currentPage) {
        setCurrentPage(prevPage);
        window.scrollTo({
          top: window.innerHeight * prevPage,
          behavior: "smooth",
        });
      }
    };

    const debounceScroll = debounce(handleScroll, 400);

    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, [currentPage]);

  return (
    <div className="main-page-container">
      <div className="full-screen first-screen">
        <div className="hero-container">
          <div>
            <h1>ПАПАРАЦЬ</h1>
            <p>
              <span>ЭТНО-ФЬЮЖН</span> ГРУППА ИЗ ГРОДНО
            </p>
          </div>
          <div className="hero-links">
            <img src="/assets/icons/instagram.png" alt="" />
            <img src="/assets/icons/soundcloud.png" alt="" />
            <img src="/assets/icons/youtube.png" alt="" />
            <img src="/assets/icons/soundcloud.png" alt="" />
            <img src="/assets/icons/youtube.png" alt="" />
          </div>
        </div>
        {/* <img
          //   onClick={() => secondPageRef.current.scrollIntoView()}
          className="arrow-down"
          src="/assets/down-chevron.png"
          alt=""
        /> */}
      </div>
      <div className="full-screen second-screen">
        <div className="second-content-container">
          <h2>НАШИ ЗАПИСИ</h2>
          <div className="main-bandcamp">
            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=3565165907/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>

            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=2611354670/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>

            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=1746652099/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="full-screen third-screen">
        <div className="third-screen-container">
          <h2>О проекте</h2>
          <p>
            «Папараць» – это Татьяна Соловьёва и музыканты, которые играют с
            ней. Основу коллектива составляют Игорь Адасик (перкуссия), Павел
            Соловьёв (мелодика, калимба, варганы, гусли, ксилофон и др.) и Илья
            Печинин (бас-гитара, флейты; лидер one-man проекта «Аум!»). В
            2022-2023 г. с группой играла цимбалистка Алина Бойко. Коллектив
            выступает с концертной программой из песен авторства Татьяны, песен
            на стихи белорусских поэтов и собственных обработок белорусских
            народных песен, принимает приглашения на концерты и фестивали.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
