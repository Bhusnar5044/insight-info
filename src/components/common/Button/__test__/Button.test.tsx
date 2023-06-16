import { render, screen } from '@test-utils';
import { Button } from '../Button';

describe('Button', () => {
    it('should render properly', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });

    it('should render with content', () => {
        render(<Button>Dummy</Button>);
        expect(screen.getByText(/Dummy/i)).toBeInTheDocument();
    });
});
