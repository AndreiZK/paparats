import React, { ReactElement, useState } from "react";
import "../css/Accordion.scss";

interface AccordionProps {
  title: string;
  children?: ReactElement;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-container">
      <div onClick={() => setOpen(!open)} className="accordion-btn">
        <span className="accordion-title">{title}</span>
        <img
          className={`accordion-icon ${open ? "open" : ""}`}
          src="/assets/down-chevron.svg"
          alt=""
        />
      </div>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
