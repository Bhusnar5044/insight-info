import { SearchBox } from '@components/common';
import { FC, memo } from 'react';
import { ControlWrapper } from './styled';
import { IControls } from './types';

export const Controls: FC<IControls> = memo(({ onSearch }) => {
    return (
        <ControlWrapper>
            <SearchBox onSearch={onSearch} placeholder="Search" />
        </ControlWrapper>
    );
});

Controls.displayName = 'Controls';
