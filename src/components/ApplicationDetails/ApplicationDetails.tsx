import { Loader } from '@components/Loader/Loader';
import { Box, Text } from '@components/common';
import { urls } from '@constant/urls';
import { fetch } from '@utils';
import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Controls } from './Controls/Controls';
import { DateRange } from './Controls/types';
import { Card, CardContainer } from './styled';
import { IApplicationDetails } from './types';

export const ApplicationDetails: FC = memo(() => {
    const { category = 'applications', groupName } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [applicationDetails, setApplicationDetails] = useState<IApplicationDetails[]>([]);
    const [filteredApplicationDetails, setFilteredApplicationDetails] =
        useState<IApplicationDetails[]>(applicationDetails);
    const [sort, setSort] = useState('');
    const [dateRange, setDateRange] = useState<DateRange>([new Date(), new Date()]);

    const getApplicationDetails = useCallback(async () => {
        setIsLoading(true);
        let url = '';
        if (category === 'applications') url = `${urls.applications}/${groupName}`;
        else if (category === 'resources') url = `${urls.resources}/${groupName}`;

        const { response, error } = await fetch({ url });
        const data = response?.data;
        if (response?.data) {
            for (const item of data) {
                const dateArr = item.Date.split('/');
                const year = parseFloat(dateArr[2]);
                const month = parseFloat(dateArr[1]) - 1;
                const day = parseFloat(dateArr[0]);
                const newDate = new Date(year, month, day);
                // Update the object
                item.Date = newDate;
            }
            setApplicationDetails(data);
            setFilteredApplicationDetails(data);
            if (data.length) {
                const sortedData = [...data];
                sortedData.sort((a, b) => a.Date.getTime() - b.Date.getTime());
                setDateRange([sortedData[0].Date, sortedData[data.length - 1].Date]);
            }
        }
        if (error) console.log(error);

        setIsLoading(false);
    }, [category, groupName]);

    const onSearch = (value: string) => {
        const search = value.toLowerCase();
        setFilteredApplicationDetails(
            applicationDetails.filter((item: IApplicationDetails) => {
                if (
                    item.Cost.includes(search) ||
                    item.UnitOfMeasure.includes(search) ||
                    item.ServiceName.toLowerCase().includes(search) ||
                    item.Location.toLowerCase().includes(search) ||
                    item.Tags.environment.toLowerCase().includes(search)
                ) {
                    console.log({ search, item });
                    return true;
                }
                return false;
            }),
        );
    };

    const onSortChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            console.log(value);
            setSort(value);
            const sortedList = [...applicationDetails];
            if (value === 'cost-DSC') sortedList.sort((a, b) => b.Cost.localeCompare(a.Cost));
            else if (value === 'cost-ASC') sortedList.sort((a, b) => b.Cost.localeCompare(a.Cost)).reverse();
            else if (value === 'date-DSC') {
                sortedList.sort((a, b) => b.Date.getTime() - a.Date.getTime());
            } else if (value === 'date-ASC') sortedList.sort((a, b) => a.Date.getTime() - b.Date.getTime());
            setFilteredApplicationDetails(sortedList);
        },
        [applicationDetails],
    );

    const handleDateChange = useCallback(
        (value: DateRange) => {
            setDateRange(value);
            const [startDate, endDate] = value as Date[];
            console.log({ startDate, endDate });
            const sortedList = [...applicationDetails];
            sortedList
                .sort((a, b) => a.Date.getTime() - b.Date.getTime())
                .filter(
                    (item) => item.Date.getTime() >= startDate.getTime() && item.Date.getTime() <= endDate.getTime(),
                );
            setFilteredApplicationDetails(sortedList);
        },
        [applicationDetails],
    );

    useEffect(() => {
        getApplicationDetails();
    }, [getApplicationDetails]);
    return (
        <CardContainer flexDirection="column" gap="2rem">
            <Text textVariant="h3" textColor="#fff" textAlign="center">
                {groupName}
            </Text>
            <Controls
                onSearch={onSearch}
                onSortChange={onSortChange}
                sort={sort}
                handleDateChange={handleDateChange}
                dateRange={dateRange}
            />
            <CardContainer gap="2rem" flexWrap="wrap">
                {isLoading && <Loader />}
                {!isLoading &&
                    filteredApplicationDetails.map((item) => (
                        <Card
                            key={item.Date.toLocaleDateString('en-GB')}
                            flexDirection="column"
                            gap="1rem"
                            alignItems="start">
                            <Text textVariant="body3">
                                <strong>Date:</strong> {item.Date.toLocaleDateString('en-GB')}
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
