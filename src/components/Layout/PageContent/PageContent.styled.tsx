import { styled } from '@utils';

export const PageContent = styled('main')`
    overflow: auto;
    padding-top: 32px;
    width: 86%;
    margin: auto;
`;

export const Loader = styled('div')`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
`;
