import React, { useState } from "react";
import { connect } from "react-redux";
import { eat, play, nap, setName } from "../redux/actions";

const Activity = ({ name, activity, eat, play, nap, setName }) => {
    const [newName, setNewName] = useState("");

    const _handleChange = (name) => {
        setNewName(name);
    };
    const _handleClick = () => {
        setName(newName);
    };
    return (
        <>
            <h1>Whoa a kitty. What's it doing?</h1>
            <h2>React with Redux Activity Center</h2>
            <p>{name} is {activity}</p>
            <form>
                <label>
                Cat's Name
                <input
                    type="text"
                    onChange={(e) => _handleChange(e.target.value)}
                    value={newName}
                />
                </label>
                <button type="button" onClick={() => _handleClick()}>
                Submit
                </button>
            <p></p>    
            </form>
            <button type="button" onClick={()=>eat()}>
                Eating
            </button>
            <button type="button" onClick={()=>play()}>
                Playing
            </button>
            <button type="button" onClick={()=>nap()}>
                Napping
            </button>
            <p>
            <img src="http://24.media.tumblr.com/ea04a79500ff96505e3d30ece2a31580/tumblr_mhjhn6ex8A1rum37jo1_400.gif" alt="kitty"></img>
            </p>
        </>
    );
};


const mapStateToProps = (state) => {
    const { name, activity } = state;
    return { name, activity };
};

export default connect(mapStateToProps, { eat, play, nap, setName })(Activity);
