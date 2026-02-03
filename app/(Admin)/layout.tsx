import "../(Main)/globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NavBar />
        {children}  
        <Footer />
      </body>
    </html>
  );
}

