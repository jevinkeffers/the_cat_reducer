import React from "react";
import { connect } from "react-redux";
import { eat, play, nap } from "../redux/actions";

const Activity = ({ activity, eat, play, nap }) => (
    <>
        <h1>Whoa a kitty. What's it doing?</h1>
        <h2>React with Redux Activity Center</h2>
        <p>The cat is {activity}</p>
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
        <img src="http://24.media.tumblr.com/ea04a79500ff96505e3d30ece2a31580/tumblr_mhjhn6ex8A1rum37jo1_400.gif"></img>
        </p>
    </>
);

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(mapStateToProps, { eat, play, nap })(Activity);
