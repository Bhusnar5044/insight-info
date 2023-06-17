import { emptyStateMessages } from '@constant/constantStrings';
import { urls } from '@constant/urls';
import { mockAxios, renderWithRouter, screen, waitFor } from '@test-utils';
import * as mockData from '@utils/testData/applications.json';
import { Resources } from '../Resources';

const renderer = () => renderWithRouter(<Resources />);
describe('Resources', () => {
    beforeEach(() => {
        mockAxios.resetHistory();
        jest.clearAllMocks();
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
            expect(screen.getByText(emptyStateMessages.resources)).toBeInTheDocument();
        });
    });

    it('should fetch all the resources', async () => {
        mockAxios.onGet(urls.resources).reply(200, mockData);
        renderer();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
            expect(screen.getByText('dummyTitle')).toBeInTheDocument();
        });
    });
});
