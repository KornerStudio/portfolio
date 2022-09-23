import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ use, regular }) => {
    return (
        <FontAwesomeIcon icon={
            regular
                ? require('@fortawesome/free-regular-svg-icons')[`fa${use}`]
                : require('@fortawesome/free-solid-svg-icons')[`fa${use}`]
        }/>
    );
}

export default Icon;
