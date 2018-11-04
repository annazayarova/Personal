import React from "react";

class DayOfWeek extends React.Component {
	getDayName(day) {
		const days = [
    		"Sunday",
    		"Monday",
      		"Tuesday",
      		"Wednesday",
      		"Thursday",
      		"Friday",
      		"Saturday"
    	];

		return days[day];
	}

	render() {
		const today = new Date().getDay();

    	return <span>{ this.getDayName(today) }</span>;
  	}
}

export default DayOfWeek;
