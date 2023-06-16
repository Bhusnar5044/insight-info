import { fireEvent, render, screen } from '@test-utils';
import { Textfield } from '../Textfield';
import { Props } from '../types';

const onChange = jest.fn();
const defaultProps: Props = {
    label: 'Dummy',
    name: 'Dummy',
    value: '',
    onChange,
    placeholder: 'dummy placeholder',
};
const renderer = (props = defaultProps) => render(<Textfield {...props} />);

describe('Textfield', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should call onChange event', () => {
        renderer();
        const Input = screen.getByPlaceholderText(/dummy placeholder/i);
        fireEvent.change(Input, { target: { value: '123' } });
        expect(onChange).toBeCalled();
    });

    it('should render textField with value', () => {
        renderer({ ...defaultProps, value: '123' });
        expect(screen.getByPlaceholderText(/dummy placeholder/i)).toHaveValue('123');
    });

    it('should disable the texField if disable prop is provided', () => {
        renderer({ ...defaultProps, disabled: true });
        expect(screen.getByPlaceholderText(/dummy placeholder/i)).toBeDisabled();
    });
});
