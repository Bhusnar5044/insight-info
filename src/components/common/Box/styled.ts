import { styled } from '@utils';
import { Props } from './types';

export const Container = styled.div<Props>`
    display: ${({ display }) => display || 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: ${({ flexWrap }) => flexWrap};
    gap: ${({ gap }) => gap};
    margin: ${({ margin }) => margin};
`;
