import Loader from '@components/Loader';
import { SearchBox } from '@components/common';
import { urls } from '@constant/urls';
import { fetch } from '@utils';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { StyledCard, StyledCardContainer } from '../styled';

export const Applications: FC = memo(() => {
    const [isLoading, setIsLoading] = useState(false);
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState(applications);

    const getApplications = useCallback(async () => {
        setIsLoading(true);
        const { response, error } = await fetch({ url: urls.applications });
        if (response?.data) {
            setApplications(response?.data);
            setFilteredApplications(response?.data);
        }
        if (error) console.log(error);

        setIsLoading(false);
    }, []);

    const onSearch = (value: string) => {
        setFilteredApplications(applications.filter((item: string) => item.includes(value)));
    };

    useEffect(() => {
        !applications.length && getApplications();
    }, [applications.length, getApplications]);

    return (
        <StyledCardContainer flexDirection="column" gap="1rem">
            <SearchBox onSearch={onSearch} placeholder="Search" />
            {isLoading && <Loader />}
            {!isLoading &&
                filteredApplications.length &&
                filteredApplications.map((application, index) => (
                    <StyledCard key={`${application}-${index}`} to={`/applications/${application}`}>
                        {application}
                    </StyledCard>
                ))}
        </StyledCardContainer>
    );
});
