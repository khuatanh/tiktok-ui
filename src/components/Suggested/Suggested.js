import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Styles from './Suggested.module.scss';
import * as SuggestedService from '~/Services/SuggestedAPI';
// import PreviewInfo from './PreviewInfo';

const cx = classNames.bind(Styles);
function Suggested({ title }) {
    const [suggestedResult, setSuggestedResult] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const suggestedApi = async () => {
            if (!seeAll) {
                const result = await SuggestedService.Suggested(1, 5);
                setSuggestedResult(result);
            } else {
                const result = await SuggestedService.Suggested(1, 16);
                setSuggestedResult(result);
            }
        };
        suggestedApi();
    }, [seeAll]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            {suggestedResult.map((account, index) => {
                return <AccountItem key={index} data={account} />;
            })}

            {seeAll ? (
                <div className={cx('more-btn')} onClick={() => setSeeAll(false)}>
                    See less
                </div>
            ) : (
                <div className={cx('more-btn')} onClick={() => setSeeAll(true)}>
                    See all
                </div>
            )}
        </div>
    );
}

Suggested.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Suggested;
