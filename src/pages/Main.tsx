import { useEffect, useState } from "react";
import "../css/MainPage.scss";

const contactsData = [
  {
    title: "Электропочта",
    value: "t.soloviova@gmail.com",
    url: "mailto:t.soloviova@gmail.com",
  },
  {
    title: `Менеджмент,
    организация концертов,
    пресс-атташе`,
    value: `pavel.soloviov@gmail.com`,
    url: "mailto:pavel.soloviov@gmail.com",
  },
];

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
      const nextPage = currentPage < 3 ? currentPage + 1 : 0;
      const prevPage = currentPage > 0 ? currentPage - 1 : 3;

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
      <div id="main" className="full-screen first-screen">
        <div className="hero-container">
          <div>
            <h1>ПАПАРАЦЬ</h1>
            <p>
              <span className="green">ЭТНО-ФЬЮЖН</span> ГРУППА ИЗ ГРОДНО
            </p>
          </div>
          <div className="hero-links">
            <a target="blank" href="https://www.instagram.com/paparats.music">
              <img src="/assets/icons/instagram.svg" alt="" />
            </a>
            <a target="blank" href="https://soundcloud.com/tsoloviova">
              <img src="/assets/icons/soundcloud.svg" alt="" />
            </a>
            <a target="blank" href="https://www.youtube.com/@paparats">
              <img src="/assets/icons/youtube.svg" alt="" />
            </a>
            <a
              target="blank"
              href="http://www.facebook.com/t.soloviova.paparats"
            >
              <img src="/assets/icons/facebook.svg" alt="" />
            </a>
          </div>
        </div>
        {/* <img
          //   onClick={() => secondPageRef.current.scrollIntoView()}
          className="arrow-down"
          src="/assets/down-chevron.png"
          alt=""
        /> */}
      </div>
      <div id="music" className="full-screen second-screen">
        <div className="second-content-container">
          <h2>НАШИ ЗАПИСИ</h2>
          <div className="main-bandcamp">
            <span>Чтобы послушать нажмите на обложку</span>
            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=3565165907/size=large/bgcol=#012708/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>

            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=2611354670/size=large/bgcol=#012708/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>

            <iframe
              frameBorder="0"
              className="main-bandcamp-item"
              src="https://bandcamp.com/EmbeddedPlayer/album=1746652099/size=large/bgcol=#012708/linkcol=0687f5/artwork=small/transparent=true/"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="about" className="full-screen third-screen">
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
      <div id="final" className="full-screen fourth-screen">
        <div className="fourth-screen-container">
          <div className="video-container">
            <h2>
              Клипы и живые выступления - на нашем{" "}
              <a href="https://www.youtube.com/@paparats" className="green">
                YouTube канале!
              </a>
            </h2>
            <iframe
              src="https://www.youtube.com/embed/gFf7VVjeTpo?autoplay=0"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="contacts-container">
            <h2>Контакты</h2>
            <div className="contacts-items">
              {contactsData.map((i) => (
                <div>
                  <span>{i.title}</span>{" "}
                  <a className="green" href={i.url}>
                    {i.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
