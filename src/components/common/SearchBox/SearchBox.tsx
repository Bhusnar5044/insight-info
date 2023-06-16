// <div id="search-wrapper">

//   <i class="search-icon fas fa-search"></i>

// <input type="text" id="search" placeholder="Search 5 Min Code :)">
// <button id="search-button">Search</button>

// </div>

import CloseIcon from '@assets/closeIcon.svg';
import SearchIcon from '@assets/searchIcon.svg';
import { ChangeEvent, FC, KeyboardEvent, forwardRef, memo, useCallback, useState } from 'react';
import { Box } from '..';
import { Input, InputWrapper } from './styled';
import { Props } from './types';

export const SearchBox: FC<Props> = memo(
    forwardRef<HTMLInputElement, Props>(({ fullWidth, onSearch, ...props }, ref) => {
        const [search, setSearch] = useState('');
        const onChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                if (value === '') onSearch('');
                setSearch(event.target.value);
            },
            [onSearch],
        );

        const onKeyDown = useCallback(
            (event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter') {
                    onSearch(search);
                    onSearch(search);
                }
            },
            [onSearch, search],
        );

        const onSearchIconClick = useCallback(() => {
            onSearch(search);
        }, [onSearch, search]);

        const onClear = useCallback(() => {
            setSearch('');
            onSearch('');
        }, [onSearch]);

        return (
            <InputWrapper for="searchInput" {...{ fullWidth }}>
                <Input
                    ref={ref}
                    type="text"
                    id="searchInput"
                    placeholder="&nbsp;"
                    {...props}
                    onChange={onChange}
                    value={search}
                    onKeyDown={onKeyDown}
                />
                <Box gap="0.5rem">
                    {search && <img src={CloseIcon} onClick={onClear} alt="slose-icon" />}
                    <img src={SearchIcon} onClick={onSearchIconClick} alt="search-icon" />
                </Box>
            </InputWrapper>
        );
    }),
);
