import { ErrorBoundary } from '@components/Layout';
import { AuthProvider } from '@context/AuthProvider';
import { TodoContextProvider } from '@context/TodoProvider';
import { Routes } from '@routes';
import { theme } from '@theme';
import { ThemeProvider } from '@utils';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthProvider>
                    <TodoContextProvider>
                        <ErrorBoundary>
                            <Routes />
                        </ErrorBoundary>
                    </TodoContextProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
