import { Loader } from '@components/Loader/Loader';
import { Box, Text } from '@components/common';
import { useAuth } from '@context/AuthProvider';
import { FC, memo, useEffect } from 'react';
import { CardBox, StyledAvatar } from './styled';

export const Profile: FC = memo(() => {
    const { profileInfo, fetchProfileDetails, isLoading } = useAuth();

    useEffect(() => {
        if (!profileInfo?.email) fetchProfileDetails?.();
    }, [fetchProfileDetails, profileInfo?.email]);
    return (
        <>
            <Box display="flex" flexDirection="column" gap="2rem" justifyContent="center">
                <CardBox display="flex" flexDirection="column" gap="2rem" alignItems="center">
                    {isLoading && <Loader />}
                    {!isLoading && (
                        <>
                            <StyledAvatar src={profileInfo.avatar} alt="avatar" />
                            <Text textColor="#fff">
                                <strong>Name: </strong> {profileInfo.name}
                            </Text>
                            <Text textColor="#fff">
                                <strong>Email: </strong> {profileInfo.email}
                            </Text>
                            <Text textColor="#fff">
                                <strong>Role: </strong> {profileInfo.role}
                            </Text>
                        </>
                    )}
                </CardBox>
            </Box>
        </>
    );
});

Profile.displayName = 'Profile';
