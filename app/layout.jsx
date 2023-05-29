import Nav from "@/components/nav";
import Provider from "@/components/provider";
import "@/styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Shared AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
