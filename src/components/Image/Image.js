import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './styles.module.scss';

const Image = forwardRef(({ src, className, ...props }, ref) => {
    const [fallback, setfallback] = useState('');

    const handleOnError = () => {
        setfallback(images.noImage);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleOnError}
            alt=""
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    ref: PropTypes.string,
};
export default Image;
