import React from "react";

const Footer = (props) => {
    return(
        <React.Fragment>
            <footer>
            <hr/>
            <center>
            <h3>&copy; Sourav Kumar {props.year} {props.month}</h3>
            </center>
            </footer>
        </React.Fragment>
    )
}

export default Footer;