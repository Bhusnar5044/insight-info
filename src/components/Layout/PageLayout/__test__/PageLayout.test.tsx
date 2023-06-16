import { render, screen } from '@test-utils';
import PageContent from '../../PageContent';
import { PageLayout } from '../PageLayout';

describe('PageLayout component', () => {
    it('should render properly', () => {
        const { container } = render(
            <PageLayout>
                <PageContent>
                    <p>dummy Text</p>
                </PageContent>
            </PageLayout>,
        );
        expect(screen.getByText('dummy Text')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
