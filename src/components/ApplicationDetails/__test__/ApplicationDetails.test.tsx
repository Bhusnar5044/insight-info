import { emptyStateMessages } from '@constant/constantStrings';
import { urls } from '@constant/urls';
import { fireEvent, mockAxios, renderWithRouter, screen, waitFor } from '@test-utils';
import * as mockData from '@utils/testData/applicationDetails.json';
import { ApplicationDetails } from '../ApplicationDetails';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        category: 'applications',
        groupName: 'dummy',
    }),
}));

const renderer = () => renderWithRouter(<ApplicationDetails />);
describe('Dashboard', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
        mockAxios.resetHistory();
    });

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/dummy/i)).toBeInTheDocument();
    });

    it('should show loader', () => {
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
    });

    it('should show no result available message on failure or in case response is empty', async () => {
        mockAxios.onGet(`${urls.applications}/dummy`).reply(200, []);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(emptyStateMessages.noResultFound)).toBeInTheDocument();
        });
    });

    it('should fetch all the applications', async () => {
        mockAxios.onGet(`${urls.applications}/dummy`).reply(200, mockData);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(/production/i)).toBeInTheDocument();
        });
    });

    it('should show the result based on search', async () => {
        mockAxios.onGet(`${urls.applications}/dummy`).reply(200, mockData);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(/test/i)).toBeInTheDocument();
            const searchBox = screen.getByTitle('searchBox');
            fireEvent.change(searchBox, { target: { value: 'production' } });
            fireEvent.keyDown(searchBox, { key: 'Enter' });
            screen.debug();
            expect(screen.queryByTitle(/test/i)).not.toBeInTheDocument();
            expect(screen.getByText(/production/i)).toBeInTheDocument();
        });
    });
});
