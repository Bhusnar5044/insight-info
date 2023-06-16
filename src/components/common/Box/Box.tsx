import { FC, PropsWithChildren, memo } from 'react';
import { Container } from './styled';
import { Props } from './types';

export const Box: FC<PropsWithChildren & Props> = memo(({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
});

Box.displayName = 'Box';
