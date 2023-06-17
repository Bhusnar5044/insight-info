import { render, screen } from '@test-utils';
import { Dashboard } from '../Dashboard';

const renderer = () => render(<Dashboard />);
describe('Dashboard', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render with tabs', () => {
        renderer();
        expect(screen.getAllByText('Applications')).toHaveLength(2);
        expect(screen.getByText('Resources')).toBeInTheDocument();
    });
});
