import Footer from "./components/Footer/Footer";
import Form from "./components/FormBlok/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Links from "./components/Links/Links";
import Main from "./components/Main/Main";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Hero/>
            <section className="formBlok">
              <Form/>
              <Links/>
            </section>
            
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
