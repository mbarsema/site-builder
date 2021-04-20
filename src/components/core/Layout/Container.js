import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Container({ children, variant }) {
    return (
        <div className={ classNames('', {
            'container': variant === 'bootstrap' || variant === 'light'
        })}>
            { children }
        </div>
    );
}

Container.propTypes = {
    variant: PropTypes.string
}

Container.defaultProps = {
    variant: 'bootstrap'
};
