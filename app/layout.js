import "../styles/globals.css";

export const metadata = {
  title: "Techifia",
  description: " Discover & Share Technical News fo the better",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
