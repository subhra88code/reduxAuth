import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/appRoutes.jsx";
import {Provider} from 'react-redux'
import { store } from "./app/store.jsx";
import { ToastContainer} from 'react-toastify';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes/>
        <ToastContainer />
    </Provider>
    </QueryClientProvider>
    
);
