import { cleanup, render, screen } from '@test-utils';
import { PageContent } from '../PageContent';

describe('PageContent component', () => {
    beforeEach(() => {
        cleanup();
    });
    it('should render properly', () => {
        const { container } = render(<PageContent>Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });

    it('should render with loader properly', () => {
        render(<PageContent isLoading={true}>Demo PageContent</PageContent>);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
        expect(screen.queryByText('Demo PageContent')).not.toBeInTheDocument();
    });
});
