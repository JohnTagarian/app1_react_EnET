import React from 'react';
import './products.css'

export default class Products extends React.Component {

    data = [
        ['React', 500],
        ['React Native', 650],
        ['Node.js', 450],
        ['MongoDB', 300],
        ['Express', 650]    
    ]

    render() {
        return (
            <table border="1">
                <thead>
                    <tr><th>ชื่อ</th><th>ราคา</th></tr>
                </thead>
                <tbody>
                    {this.data.map(d => (
                        <tr key={d[0]}><td>{d[0]}</td><td>{d[1]}</td></tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
