import { Provider } from "@/components/ui/provider";
import Navbar, { NAVBAR_HEIGHT } from "@/components/Navbar";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <main style={{ paddingTop: NAVBAR_HEIGHT }}>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
