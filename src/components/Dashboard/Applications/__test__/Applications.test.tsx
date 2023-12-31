import { emptyStateMessages } from '@constant/constantStrings';
import { urls } from '@constant/urls';
import { fireEvent, mockAxios, renderWithRouter, screen, waitFor } from '@test-utils';
import * as mockData from '@utils/testData/applications.json';
import { Applications } from '../Applications';

const renderer = () => renderWithRouter(<Applications />);

describe('Applications', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
        mockAxios.resetHistory();
    });

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should show no result available message on failure or in case response is empty', async () => {
        mockAxios.onGet(urls.applications).reply(200, []);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(emptyStateMessages.application)).toBeInTheDocument();
        });
    });

    it('should fetch all the applications', async () => {
        mockAxios.onGet(urls.applications).reply(200, mockData);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText('dummyTitle')).toBeInTheDocument();
        });
    });

    it('should show the result based on search', async () => {
        mockAxios.onGet(urls.applications).reply(200, mockData);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(/dummyTitle2/i)).toBeInTheDocument();
            const searchBox = screen.getByTitle('searchBox');
            fireEvent.change(searchBox, { target: { value: 'dummyTitle3' } });
            fireEvent.keyDown(searchBox, { key: 'Enter' });
            screen.debug();
            expect(screen.queryByTitle(/dummyTitle2/i)).not.toBeInTheDocument();
            expect(screen.getByText(/dummyTitle3/i)).toBeInTheDocument();
        });
    });
});
