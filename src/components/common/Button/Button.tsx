import { FC, PropsWithChildren, memo } from 'react';
import { ButtonContainer } from './styled';
import { Props } from './types';

export const Button: FC<PropsWithChildren & Props> = memo(({ children, loading, ...props }) => {
    return (
        <ButtonContainer className={loading ? 'loading' : ''} {...props}>
            {children}
        </ButtonContainer>
    );
});

Button.displayName = 'Button';
Button.defaultProps = {
    type: 'button',
};
