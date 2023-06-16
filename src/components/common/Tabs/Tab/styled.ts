import { Box } from '@components/common';
import { theme } from '@theme';
import { styled } from '@utils';

export const Content = styled(Box)`
    padding: 2rem;
    color: ${theme.colors.other.purpleTypo};
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    background: ${theme.colors.other.lightPurple};
`;
