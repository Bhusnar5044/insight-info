import { render } from '@test-utils';
import { Dashboard } from '../Dashboard';

describe('Dashboard', () => {
    it('should render properly', () => {
        const { container } = render(<Dashboard />);
        expect(container).toMatchSnapshot();
    });
});
