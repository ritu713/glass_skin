import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './AppContext'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppContextProvider>
    </QueryClientProvider>
)
