import { emptyStateMessages } from '@constant/constantStrings';
import { urls } from '@constant/urls';
import { fireEvent, mockAxios, renderWithRouter, screen, waitFor } from '@test-utils';
import * as mockData from '@utils/testData/applications.json';
import { Dashboard } from '../Dashboard';

const renderer = () => renderWithRouter(<Dashboard />);
describe('Dashboard', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
        mockAxios.resetHistory();
    });

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render with tabs', () => {
        renderer();
        expect(screen.getAllByText('Applications')).toHaveLength(2);
        expect(screen.getByText('Resources')).toBeInTheDocument();
    });

    it('should show loader', () => {
        renderer();
        expect(screen.getAllByText('Applications')).toHaveLength(2);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
    });

    it('should show no result available message on failure or in case response is empty', async () => {
        mockAxios.onGet(urls.applications).networkError();
        renderer();
        expect(screen.getAllByText('Applications')).toHaveLength(2);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText(emptyStateMessages.application)).toBeInTheDocument();
        });
    });

    it('should fetch all the applications', async () => {
        mockAxios.onGet(urls.applications).reply(200, mockData);
        renderer();
        expect(screen.getAllByText('Applications')).toHaveLength(2);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText('dummyTitle')).toBeInTheDocument();
        });
    });

    it('should go to the resources tab when we click on resources tab', () => {
        renderer();
        fireEvent.click(screen.getByText('Resources'));
        expect(screen.getAllByText('Resources')).toHaveLength(2);
    });

    it('should fetch all the resources', async () => {
        mockAxios.onGet(urls.applications).reply(200, mockData);
        mockAxios.onGet(urls.resources).reply(200, mockData);
        renderer();
        fireEvent.click(screen.getByText('Resources'));
        expect(screen.getAllByText('Resources')).toHaveLength(2);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText('dummyTitle')).toBeInTheDocument();
        });
    });
});
