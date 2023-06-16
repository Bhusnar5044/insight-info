import { render, screen } from '@test-utils';
import { Box } from '../Box';

describe('Box', () => {
    it('should render properly', () => {
        const { container } = render(<Box />);
        expect(container).toMatchSnapshot();
    });

    it('should render with content', () => {
        render(<Box>dummy content</Box>);
        expect(screen.getByText(/dummy content/i)).toBeInTheDocument();
    });

    it('should render with given style', () => {
        render(
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                dummy content
            </Box>,
        );
        expect(screen.getByText(/dummy content/i)).toHaveStyleRule(
            'display',
            'flex',
            'flex-direction',
            'column',
            'align-items',
            'center',
        );
    });
});
