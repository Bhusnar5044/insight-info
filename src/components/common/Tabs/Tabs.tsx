import { FC, memo, useMemo, useState } from 'react';
import Navigation from './Navigation';
import Tab from './Tab';
import { TabsWrapper } from './styled';
import { Props } from './types';

export const Tabs: FC<Props> = memo(({ data }) => {
    const [activeTabId, setActiveTab] = useState(data[0].id);

    const activeTab = useMemo(() => data.find((tab) => tab.id === activeTabId), [activeTabId, data]);

    return (
        <TabsWrapper flexDirection="column">
            <Navigation tabs={data} onNavClick={setActiveTab} activeTabId={activeTabId} />
            {activeTab && <Tab data={activeTab} />}
        </TabsWrapper>
    );
});

Tabs.displayName = 'Tabs';
