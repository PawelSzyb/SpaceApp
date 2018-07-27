import React from "react";
import { Link } from "react-router-dom";

import "./Modal.css";

const Modal = props => {
  const { item } = props;
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="photo">
          <img src={item.links[0].href} alt="" />
        </div>
        <div className="description">
          <h2 className="title">{item.data[0].title}</h2>
          <p className="description-text">
            {item.data[0].description.substring(0, 200)}
            {item.data[0].description.length > 200 ? (
              <span>
                <span>... </span>
                <Link to="/">Read More</Link>
              </span>
            ) : null}
          </p>
        </div>
      </div>
      <div className="close" onClick={props.handleModalOpen} />
    </div>
  );
};

export default Modal;
