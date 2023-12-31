import { StyledBox } from '@components/Auth/styled';
import { theme } from '@theme';
import { styled } from '@utils';

export const CardBox = styled(StyledBox)`
    width: 40%;
    justify-content: center;
`;

export const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    border: 1px solid ${theme.colors.primary.light};
`;
