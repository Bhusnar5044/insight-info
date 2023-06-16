import { StyledBox } from '@pages/Auth/styled';
import { theme } from '@theme';
import { styled } from '@utils';

export const CardBox = styled(StyledBox)`
    width: 40%;
`;

export const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    border: 1px solid ${theme.colors.primary.light};
`;
