import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";

export default function App() {

    return(
        <main className="relative min-h-screen">
            <HEADER />
            <div className="divider mt-0 mb-0"></div>
            <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <HEADLINE h1="All you need." p="Free Tools, Easy-to-use."></HEADLINE>
                <p>Here goes the Code</p>
            </div>
            <div className="footer-wrapper absolute bottom-0 transform translate-y-full w-full">
                <div className="divider mt-0 mb-0"></div>
                <FOOTER />
            </div>        
        </main>
       
    );
}