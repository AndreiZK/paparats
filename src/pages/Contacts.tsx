import "../css/Contacts.scss";

const contactsData = [
  {
    title: "Электропочта",
    value: "t.soloviova@gmail.com",
    url: "mailto:t.soloviova@gmail.com",
  },
  {
    title: "Facebook",
    value: "http://www.facebook.com/t.soloviova.paparats",
    url: "http://www.facebook.com/t.soloviova.paparats",
  },
  {
    title: "Instagram",
    value: "@paparats.music",
    url: "http://www.instagram.com/paparats.music",
  },
  {
    title: "Youtube",
    value: "@paparats",
    url: "http://www.youtube.com/@paparats",
  },
  {
    title: `Менеджмент,
    организация концертов,
    пресс-атташе`,
    value: `pavel.soloviov@gmail.com`,
    url: "mailto:pavel.soloviov@gmail.com",
  },
];

const Contacts = () => {
  return (
    <>
      <h2>Контакты</h2>
      <div className="contacts">
        {contactsData.map((i) => (
          <div className="contacts-item">
            <span className="contacts-item-title">{i.title}</span>{" "}
            <a href={i.url} target="blank" className="contacts-item-value">
              {i.value}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
