import '../../css/breadcrumb.css';
import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
        {props.canReturn &&
          <a className="button-back"
            onClick={() => {props.goBack()}}>
            Back
          </a>
        }
    </div>
  )
}

export default Breadcrumb;
