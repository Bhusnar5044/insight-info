import { fireEvent, render, screen } from '@test-utils';
import { SingleSelect } from '../SingleSelect';
import { Props } from '../types';

const onChange = jest.fn();
const defaultProps: Props = {
    options: [
        { value: 'dummy', label: 'Dummy' },
        { value: 'dummy1', label: 'Dummy1' },
    ],
    value: '',
    onChange,
};
const renderer = (props = defaultProps) => render(<SingleSelect {...props} />);

describe('SingleSelect', () => {
    it('should render properly with default props', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should open options on click on filed', () => {
        renderer();
        const element = screen.getByTitle('single-select');
        fireEvent.click(element);
        expect(screen.getByText('Dummy')).toBeInTheDocument();
    });

    it('should call onChange method on option change', () => {
        renderer();
        const element = screen.getByTitle('single-select');
        fireEvent.click(element);
        const option = screen.getByText('Dummy');
        expect(option).toBeInTheDocument();
        fireEvent.change(element, { target: { value: 'dummy' } });
        expect(onChange).toBeCalled();
    });
});
