import DashboardContent from '@components/DashboardContent';
import { Box } from '@components/common';
import { FC, memo } from 'react';

export const Dashboard: FC = memo(() => {
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" gap="2rem">
                {/* <Todo /> */}
                <DashboardContent />
            </Box>
        </>
    );
});

Dashboard.displayName = 'Dashboard';
