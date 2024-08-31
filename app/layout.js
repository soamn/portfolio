import "./globals.css";

export const metadata = {
  title: "Aman's Portfolio",
  description: "Personal Portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
