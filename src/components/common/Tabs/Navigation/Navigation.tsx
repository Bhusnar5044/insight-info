import { FC } from 'react';
import { TaButton, TabItem, TabNavList } from './styled';
import { Props } from './types';

export const Navigation: FC<Props> = ({ tabs, activeTabId, onNavClick }) => {
    return (
        <TabNavList className={`tabs__nav`}>
            {tabs.map((item) => (
                <TabItem key={item.id} className={`tabs__item`}>
                    <TaButton
                        className={`tabs__TaButton ${activeTabId === item.id ? 'active' : ''}`}
                        onClick={() => onNavClick(item.id)}>
                        {item.title}
                    </TaButton>
                </TabItem>
            ))}
        </TabNavList>
    );
};
