import ReactSvg from '@assets/react.svg';
import { FC, memo } from 'react';
import { StyledLoader } from './styled';

export const Loader: FC = memo(() => {
    return <StyledLoader src={ReactSvg} title="loader" />;
});

Loader.displayName = 'Loader';
