import { renderWithRouter } from '@test-utils';
import { Auth } from '../Auth';

describe('Auth Page', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<Auth />);
        expect(container).toMatchSnapshot();
    });
});
