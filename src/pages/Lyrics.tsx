import Accordion from "../components/Accordion";
import "../css/Lyrics.scss";

const songs = [
  {
    title: "Дудка",
    lyrics: `В небе звёзды, под небом ветер.
Вот старик, знает всё на свете;
На руках из морщинок сети...
Как поётся мне в пальцах этих!
Пальцы знают, на чём держалась,
Где во мне спрятан смех, где жалость,
Где так больно, что горло сжалось,
Что срослось, что ещё осталось...

Пальцы непростые,
Сердце не остынет,
На ветру в пустыне дудкой быть отныне,
Ветер под губами,
Тени выйдут сами,
Песчаные струи протянут-продуют,
Мастер знает дело,
Расплетает тело,
Где нашлась – не помню, да о чём запела,
Заплетутся туго по большому кругу
Горькие коренья –
Затвердело время
Чёрной гладкой кожей –
Век утечь не сможет,
Вот теперь-то губы намертво полюбят,
Радуйся, смотри –
Ничего внутри.

Как он пустотелой дудкой меня сделал?
Руки золотые
Да пески пустые...

Время горстью песок раскинет.
Ходят люди в моей пустыне,
Сыплют в небо свои вопросы,
Да старик только смотрит косо,
Как их время в пески протащит –
Он всё смотрит сквозь проходящих.
Хоть блестящий, а хоть пропащий –
Знает: каждый с изнанки слаще.

Не тужи, мой хозяин хмурый,
Я их выверну, точно шкуры,
Чтобы в каждом достать змею...
Ну, целуй меня!
Запою...`,
  },
];

const Lyrics = () => {
  return (
    <div className="lyrics-container">
      <h2>Тексты песен</h2>
      <div className="songs-container">
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
        {songs.map((song) => (
          <Accordion title={song.title}>
            <p>{song.lyrics}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Lyrics;
