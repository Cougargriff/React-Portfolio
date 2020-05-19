import React from 'react'; // Import the Component component from React
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <div className="project-image">
            <a href={props.link}>
                <img src={props.image} alt="Project Image" width="50" />
            </a>
        </div>
    </div>
  );
}
 
export default Thumbnail;