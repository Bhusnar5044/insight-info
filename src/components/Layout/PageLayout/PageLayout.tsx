import { FC, PropsWithChildren, memo } from 'react';
import { PageLayoutStyled } from './PageLayout.styled';

export const PageLayout: FC<PropsWithChildren> = memo((props) => <PageLayoutStyled>{props.children}</PageLayoutStyled>);

PageLayout.displayName = 'PageLayout';
