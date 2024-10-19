import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from './globalStyles';
import { AppRoutes } from './routes/AppRoutes';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <GlobalStyle />
        <AppRoutes />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
