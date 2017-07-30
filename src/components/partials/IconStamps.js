import '../../css/breadcrumb.css';
import React from 'react';
import ReactSVG from 'react-svg';

const IconStamps = (props) => {

  const makeIconStamps = (stamps, stampsIcon) => {
		const stampsCurrent = stamps[0];
		const stampsMax = stamps[1];
		let icon = null;

		switch (stampsIcon) {
			case 'coffee':
				icon = (<ReactSVG path="/images/stamp_coffee.svg"/>);
				break;
			case 'tea':
				icon = (<ReactSVG path="/images/stamp_tea.svg"/>);
				break;
			case 'pizza':
				icon = (<ReactSVG path="/images/stamp_pizza.svg"/>);
				break;
			default :
				icon = '#';
		}

		return Array(stampsMax).fill().map((stamp, index) => {
			if (index >= stampsCurrent) {
				return (
					<span key={index} className="stamp-icon empty">
						{icon}
					</span>
				);
			} else {
				return (
					<span key={index} className="stamp-icon">
						{icon}
					</span>
				);
			}
		});
	}

  return (
    <div className="icon-stamps">
      {makeIconStamps(props.stamps, props.stampsIcon)}
    </div>
  )
}

export default IconStamps;
