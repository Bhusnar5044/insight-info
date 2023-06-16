import { SearchBox, SingleSelect } from '@components/common';
import { FC, memo } from 'react';
import { ControlWrapper } from './styled';
import { IControls } from './types';

const options = [
    { label: 'Select sort', value: '' },
    {
        label: 'Sort by Cost (H-L)',
        value: 'cost-DSC',
    },
    {
        label: 'Sort by Cost (L-H)',
        value: 'cost-ASC',
    },
    {
        label: 'Sort by Date (DSC)',
        value: 'date-DSC',
    },
    {
        label: 'Sort by Date (ASC)',
        value: 'date-ASC',
    },
];
export const Controls: FC<IControls> = memo(({ onSearch, onSortChange, sort }) => {
    return (
        <ControlWrapper gap="1rem">
            <SearchBox onSearch={onSearch} placeholder="Search" />
            <SingleSelect options={options} onChange={onSortChange} value={sort} />
        </ControlWrapper>
    );
});

Controls.displayName = 'Controls';
