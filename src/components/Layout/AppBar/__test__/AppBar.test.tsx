import { renderWithRouter, screen } from '@test-utils';
import { AppBar } from '../AppBar';

describe('AppBar', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<AppBar />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
