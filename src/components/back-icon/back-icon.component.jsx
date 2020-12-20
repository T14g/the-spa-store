import React from 'react';
import { connect } from 'react-redux';
import { HideCart, ShowCart } from '../../redux/shop/shop.actions';

import './back-icon.styles.scss';

const BackIcon = ({show, hideCart}) => {

return(
    <button 
        className="back-icon-box" 
        style={{ display: show ? 'block' : 'none' }} 
        onClick={ () => hideCart()}>
        <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
    </button>
    );
}

const mapDispatchToProps = dispatch => ({
    hideCart: () => dispatch(HideCart())
})

export default connect(null, mapDispatchToProps)(BackIcon);