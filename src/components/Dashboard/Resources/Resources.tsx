import Loader from '@components/Loader';
import { SearchBox } from '@components/common';
import { urls } from '@constant/urls';
import { fetch } from '@utils';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { StyledCard, StyledCardContainer } from '../styled';

export const Resources: FC = memo(() => {
    const [isLoading, setIsLoading] = useState(false);
    const [resources, setResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState(resources);

    const getResources = useCallback(async () => {
        setIsLoading(true);
        const { response, error } = await fetch({ url: urls.resources });
        if (response?.data) {
            setResources(response?.data);
            setFilteredResources(response?.data);
        }
        if (error) console.log(error);

        setIsLoading(false);
    }, []);

    const onSearch = (value: string) => {
        setFilteredResources(resources.filter((item: string) => item.toLowerCase().includes(value.toLowerCase())));
    };

    useEffect(() => {
        !resources.length && getResources();
    }, [getResources, resources.length]);

    return (
        <StyledCardContainer flexDirection="column" gap="1rem">
            <SearchBox onSearch={onSearch} placeholder="Search" />
            {isLoading && <Loader />}
            {!isLoading &&
                filteredResources.length &&
                filteredResources.map((resource, index) => (
                    <StyledCard key={`${resource}-${index}`} to={`/resources/${resource}`}>
                        {resource}
                    </StyledCard>
                ))}
        </StyledCardContainer>
    );
});
