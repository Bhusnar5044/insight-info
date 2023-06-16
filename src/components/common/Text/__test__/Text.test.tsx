import { render, screen } from '@test-utils';
import { Text } from '../Text';

describe('Text', () => {
    it('should render properly', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with content provided', () => {
        render(<Text>Dummy Text</Text>);
        expect(screen.getByText(/Dummy Text/i)).toBeInTheDocument();
    });

    it('should render properly with content provided', () => {
        render(<Text>Dummy Text</Text>);
        expect(screen.getByText(/Dummy Text/i)).toBeInTheDocument();
    });

    it('should render properly with provided style props', () => {
        render(
            <Text textColor="red" textAlign="center">
                Dummy Text
            </Text>,
        );
        expect(screen.getByText('Dummy Text')).toHaveStyleRule('color', 'red', 'text-align', 'center');
    });

    it('should render properly with uppercase and lineThrough prop', () => {
        render(
            <Text uppercase lineThrough>
                Dummy Text
            </Text>,
        );
        const text = screen.getByText(/DUMMY TEXT/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyleRule('text-decoration', 'line-through');
    });
});
