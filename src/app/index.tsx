import { AppShell, MantineProvider } from '@mantine/core';
import Header from './Header'
import MainScreen from './Layout/MainScreen';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell header={<Header />}> 
        <MainScreen />
      </AppShell>
    </MantineProvider>
  );
}