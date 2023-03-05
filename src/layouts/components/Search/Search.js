import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import * as SearchService from '~/Services/SearchAPI';
import { Wrapper as ProperWrapper } from '../Propper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { SearchIcon } from '~/icons/Icon';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setSearchHideShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 300);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await SearchService.Search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);
    const handleOnchange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleDeleteInput = () => {
        setSearchValue('');
        setSearchResult([]);
        setSearchHideShowResult(false);
        inputRef.current.focus();
    };
    const handleHideShow = () => {
        setSearchHideShowResult(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setSearchValue('');
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('searchh-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem data={result} key={result.id} onClick={handleHideShow} />
                            ))}
                        </ProperWrapper>
                    </div>
                )}
                onClickOutside={handleHideShow}
            >
                <div className={cx('input-wrapper')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        onChange={handleOnchange}
                        value={searchValue}
                        ref={inputRef}
                        onFocus={() => {
                            setSearchHideShowResult(true);
                        }}
                    />
                    <button className={cx('clear')} onClick={handleDeleteInput}>
                        {!loading && searchValue && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                    {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
