import { Box } from '@components/common';
import { theme } from '@theme';
import { styled } from '@utils';

export const StyledBox = styled(Box)`
    width: 80%;
    margin: auto;
    padding: 5rem;
    border-radius: 2rem;
    background-color: ${theme.colors.other.lightPurple};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (min-width: 1200px) {
        width: 40%;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
`;
