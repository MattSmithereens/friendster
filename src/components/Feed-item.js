import React from "react";
import PropTypes from "prop-types";

function FeedItem(props){
  return (
      <div id="red">
          <style jsx>{`
          #red {
            background-color: red;
          }
        `}</style>
          
        <h3>{props.heading}</h3>
        <p><em>{props.content}</em></p>
        <hr/>
      </div>
  );
}

FeedItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default FeedItem;