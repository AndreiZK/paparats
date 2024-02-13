import React, { ReactElement, useRef } from "react";
import "../css/MainPage.scss";
import Accordion from "../components/Accordion";

const Main = () => {
  const testScrollRef = useRef(null);

  const testScroll = () => {
    const myRef = testScrollRef.current!;
    myRef?.scrollIntoView({ behavior: "smooth" });
  };

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
        <img
          className="arrow-down"
          onClick={testScroll}
          src="/assets/down-chevron.png"
          alt=""
        />
      </div>
      <div ref={testScrollRef} className="full-screen second-screen">
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
      {/* <iframe
        frameBorder="0"
        className="main-video"
        src="https://www.youtube.com/embed/gFf7VVjeTpo"
      ></iframe>
      <div className="main-bandcamp">
        <div className="frame-container">
          <iframe
            height="300px"
            width="100%"
            frameBorder="0"
            className="main-bandcamp-item"
            src="https://bandcamp.com/EmbeddedPlayer/album=3565165907/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          ></iframe>
        </div>
        <div className="frame-container">
          <iframe
            height="300px"
            width="100%"
            frameBorder="0"
            src="https://bandcamp.com/EmbeddedPlayer/album=2611354670/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          ></iframe>
        </div>
      </div> */}
      {/* <h2>О НАС</h2>
      <div className="main-about">
        <img className="main-about-img" src="/assets/paparats1.jpg" alt="" />
        <p className="main-about-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          doloremque libero laboriosam, accusamus ipsum autem tenetur officiis
          blanditiis omnis eveniet aliquid rerum nemo quibusdam. Consectetur
          aperiam praesentium magnam nisi, corrupti et quia autem saepe corporis
          atque doloremque voluptatum quas reiciendis.
        </p>
      </div>
      <div className="main-accordions">
        <Accordion title="Homo Homini">
          <div color="white">238794327</div>
        </Accordion>
        <Accordion title="Homo Homini">
          <div color="white">238794327</div>
        </Accordion>
        <Accordion title="Homo Homini">
          <div color="white">238794327</div>
        </Accordion>
      </div> */}
    </div>
  );
};

export default Main;
