import "./i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toast } from "@heroui/react";
import PWAProvider from "./provider/pwa-provider.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col md:flex-row min-h-dvh min-w-dvw max-h-dvh max-w-dvw overflow-hidden bg-main">
      <QueryClientProvider client={queryClient}>
        <Toast.Provider placement="top"></Toast.Provider>
        <PWAProvider>
          <ThemeProvider>
            <App></App>
          </ThemeProvider>
        </PWAProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
