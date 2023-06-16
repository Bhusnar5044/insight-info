import ContainerLoader from '@components/Loader';
import { FC, memo } from 'react';
import * as Styled from './PageContent.styled';
import { Props } from './types';

export const PageContent: FC<Props> = memo((props) => {
    return (
        <Styled.PageContent {...props}>
            {props.isLoading && (
                <Styled.Loader>
                    <ContainerLoader />
                </Styled.Loader>
            )}
            {!props.isLoading && props.children}
        </Styled.PageContent>
    );
});

PageContent.displayName = 'PageContent';
