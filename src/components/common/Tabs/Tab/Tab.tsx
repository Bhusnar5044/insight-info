import { Text } from '@components/common';
import { FC, memo } from 'react';
import { Content } from './styled';
import { Props } from './types';

export const Tab: FC<Props> = memo(({ data }) => {
    return (
        <Content flexDirection="column">
            <Text textVariant="h3">{data.title}</Text>
            {data.content}
        </Content>
    );
});
