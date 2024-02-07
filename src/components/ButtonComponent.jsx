/* eslint-disable react/prop-types */
// Functional Component 
// component css 
import './buttoncomponent.css'
const ButtonComponent = ({ name, color }) => {

    // HTML of the component 
    return (
        <button
            className="btn"
            type="button"
            style={{ backgroundColor: `${color}` }}
        >
            {name}
        </button>
    )

}
export default ButtonComponent;

