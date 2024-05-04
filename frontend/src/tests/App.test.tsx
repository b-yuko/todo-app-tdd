import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';

describe('App を render したとき', () => {
  test('「Vite + React」 という文字が表示される', () => {
    // Given

    // When
    render(<App />);

    // Then
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
