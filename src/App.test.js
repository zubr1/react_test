import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// here should be more unit tests but I'm running out of time