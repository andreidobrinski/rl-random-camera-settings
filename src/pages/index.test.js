import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index';

const setupApp = () => render(<IndexPage />)

describe('The index page ', () => {
  test('renders without crashing', () => {
    setupApp()
  })
});
