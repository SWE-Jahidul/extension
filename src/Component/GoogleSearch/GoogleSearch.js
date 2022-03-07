import React, { Component } from "react";

class GoogleSearch extends Component {
  function() {
    var cx = "j5posmpyok0";
    var gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = "https://www.google.com/search?q=" + cx;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(s);
  }

  render() {
    return (
      <div>
        <form method="get" title="Search Form" action="https://www.google.com/search?q=">
          <div>
            <input
              type="text"
              id="q"
              name="q"
              title="Search this site"
              alt="Search Text"
              maxlength="256"
              placeholder="Please Search.."
              style={{
                height:27 , 
                border:"1px solid white",
                borderRadius:50,
                textAlign:"center",
                width: 300,
                backgroundColor:'transparent',
                color:"white",
                marginLeft:20,
              

            }}
            />
            {/* <input
              type="image"
              id="searchSubmit"
              name="submit"
              src="https://www.flaticon.com/free-icon/active-search-symbol_34148"
              alt="Go"
              title="Submit Search Query"
            /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default GoogleSearch;
