import React from "react";
import PropTypes from "prop-types";

const ProdCat = ({ cat1, cat2, cat3, cat4 }) => {
    return (
        <React.Fragment>
            <ul class="product-categories">
                <li><a href="#">{cat1}</a></li>
                <li><a href="#">{cat2}</a></li>
                <li><a href="#">{cat3}</a></li>
                <li><a href="#">{cat4}</a></li>
            </ul>
        </React.Fragment>
    );
}

ProdCat.propTypes = {
    cat1: PropTypes.string,
    cat2: PropTypes.string,
    cat3: PropTypes.string,
    cat4: PropTypes.string,  
}

ProdCat.defaultProps = {
cat1: "Living Room",
cat2: "Dining Room",
cat3: "Bedroom",
cat4: "Kitchen",
}

export default ProdCat