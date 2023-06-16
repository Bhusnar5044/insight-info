import { render } from '@test-utils';
import { Profile } from '../Profile';

describe('Profile', () => {
    it('should render properly', () => {
        const { container } = render(<Profile />);
        expect(container).toMatchSnapshot();
    });
});
