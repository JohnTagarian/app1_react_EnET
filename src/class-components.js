import React, {Component} from "react";

export default class Calendar extends Component{
    getDate(){
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date();
        const weekDay=dayNames[date.getDay()];
        const month=monthNames[date.getMonth()];
        const day=date.getDate();
        const year=date.getFullYear();
        return `${weekDay}, ${month} ${day}, ${year}`;
    }

    render(){
        return <div>{this.getDate()}</div>
    }

}