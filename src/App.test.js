import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const mockFetch = jest.fn();

beforeEach(() => {
  mockFetch.mockResolvedValue({
    ok: true,
    json: async () => [
      { userId: 1, id: 1, title: 'Hello world', body: 'First post' },
      { userId: 2, id: 2, title: 'React testing', body: 'Second post' },
    ],
  });
  global.fetch = mockFetch;
});

afterEach(() => {
  mockFetch.mockReset();
});

test('filters rows based on search input', async () => {
  render(<App />);

  expect(await screen.findByText('Hello world')).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText(/search/i), {
    target: { value: 'react' },
  });

  expect(screen.queryByText('Hello world')).not.toBeInTheDocument();
  expect(screen.getByText('React testing')).toBeInTheDocument();
});
