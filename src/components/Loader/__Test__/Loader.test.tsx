import { render, screen } from '@test-utils';
import { Loader } from '../Loader';

describe('Loader', () => {
    it('should render properly', () => {
        const { container } = render(<Loader />);
        expect(container).toMatchSnapshot();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
    });
});
