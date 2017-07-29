import '../../css/breadcrumb.css';
import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
        {props.canReturn &&
          <a href="#" className="button-back"
            onClick={(event) => {
              event.preventDefault();
              props.goBack();
            }}>
            Back
          </a>
        }
    </div>
  )
}

export default Breadcrumb;
