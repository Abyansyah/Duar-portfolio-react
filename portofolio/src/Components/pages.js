import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Team from './team/team';
import Favorit from './favorite/Favorit';
import Footer from './footer/Footer';

function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Team />
      <Favorit />
      <Footer />
    </main>
  );
}

export default Page
