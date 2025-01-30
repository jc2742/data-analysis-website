// pages/index.js
import Header from '../components/header';
import Mission from '../components/mission';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-6 h-fit-content">
        <Mission />

        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
