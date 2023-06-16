import { Tabs } from '@components/common';
import { FC, memo } from 'react';
import { Applications as ApplicationsTab } from './Applications/Applications';
import Resources from './Resources';
import { Container } from './styled';

const TabsContent = [
    {
        id: 'applications',
        title: 'Applications',
        content: <ApplicationsTab />,
    },
    {
        id: 'resources',
        title: 'Resources',
        content: <Resources />,
    },
];
export const DashboardContent: FC = memo(() => {
    return (
        <Container flexDirection="column">
            <Tabs data={TabsContent} />
        </Container>
    );
});
