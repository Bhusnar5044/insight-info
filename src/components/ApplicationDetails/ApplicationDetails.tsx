import { Loader } from '@components/Loader/Loader';
import { Box, Text } from '@components/common';
import { urls } from '@constant/urls';
import { fetch } from '@utils';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Controls } from './Controls/Controls';
import { Card, CardContainer } from './styled';
import { IApplicationDetails } from './types';

export const ApplicationDetails: FC = memo(() => {
    const { category = 'applications', groupName } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [applicationDetails, setApplicationDetails] = useState<IApplicationDetails[]>([]);
    const [filteredApplicationDetails, setFilteredApplicationDetails] =
        useState<IApplicationDetails[]>(applicationDetails);

    const getApplications = useCallback(async () => {
        setIsLoading(true);
        let url = '';
        if (category === 'applications') url = `${urls.applications}/${groupName}`;
        else if (category === 'resources') url = `${urls.resources}/${groupName}`;

        const { response, error } = await fetch({ url });
        if (response?.data) {
            setApplicationDetails(response?.data);
            setFilteredApplicationDetails(response?.data);
        }
        if (error) console.log(error);

        setIsLoading(false);
    }, [category, groupName]);

    const onSearch = (value: string) => {
        const search = value.toLowerCase();
        setFilteredApplicationDetails(
            applicationDetails.filter(
                (item: IApplicationDetails) =>
                    item.Cost.includes(search) ||
                    item.UnitOfMeasure.includes(search) ||
                    item.ServiceName.includes(search) ||
                    item.Location.includes(search) ||
                    item.Tags.environment.includes(search),
            ),
        );
    };

    useEffect(() => {
        getApplications();
    }, [getApplications]);
    return (
        <CardContainer flexDirection="column" gap="2rem">
            <Text textVariant="h3" textColor="#fff" textAlign="center">
                {groupName}
            </Text>
            <Controls onSearch={onSearch} />
            <CardContainer gap="2rem" flexWrap="wrap">
                {isLoading && <Loader />}
                {!isLoading &&
                    filteredApplicationDetails.map((item) => (
                        <Card key={item.Date.toString()} flexDirection="column" gap="1rem" alignItems="start">
                            <Text textVariant="body3">
                                <strong>Date:</strong> {item.Date.toString()}
                            </Text>
                            <Text textVariant="body3">
                                <strong>Cost:</strong> {item.Cost}
                            </Text>
                            <Text textVariant="body3">
                                <strong>Meter category:</strong> {item.MeterCategory}
                            </Text>
                            <Text textVariant="body3">
                                <strong>Location:</strong> {item.Location}
                            </Text>
                            <Text textVariant="body3">
                                <strong>Unit of measure:</strong> {item.UnitOfMeasure}
                            </Text>
                            <Text textVariant="body3" textWeight="Strong">
                                Tags:
                            </Text>
                            <Box flexDirection="column" margin="0 0 0 1rem" alignItems="start" gap="1rem">
                                <Text textVariant="body3">
                                    <strong>app-name:</strong> {item.Tags['app-name']}
                                </Text>
                                <Text textVariant="body3">
                                    <strong>environment:</strong> {item.Tags['environment']}
                                </Text>
                                <Text textVariant="body3">
                                    <strong>business-unit:</strong> {item.Tags['business-unit']}
                                </Text>
                            </Box>
                        </Card>
                    ))}
            </CardContainer>
        </CardContainer>
    );
});

// "Tags": {
//     "app-name": "Macao",
//     "environment": "Production",
//     "business-unit": "SolutionOps"
//   },
