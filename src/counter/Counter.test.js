import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders with initial value 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments the counter', async () => {
    render(<Counter />);
    const count = screen.getByTestId('count');

    await userEvent.click(screen.getByText('Increment'));
    expect(count).toHaveTextContent('1');
  });

  it('decrements the counter', async () => {
    render(<Counter />);
    const count = screen.getByTestId('count');

    await userEvent.click(screen.getByText('Decrement'));
    expect(count).toHaveTextContent('-1');
  });

  it('resets the counter to 0', async () => {
    render(<Counter />);
    const count = screen.getByTestId('count');
    await userEvent.click(screen.getByText('Reset'));
    expect(count).toHaveTextContent('0');
  });
});
