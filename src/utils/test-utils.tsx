import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './styled';

export const mockAxios = new MockAdapter(axios);

const WithThemeProvider: FC<PropsWithChildren> = (props) => (
    <ThemeProvider theme={theme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithRouter: FC<PropsWithChildren> = (props) => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const customRender = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, userEvent };
