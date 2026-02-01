import { ArrowLeft, CheckSquare, Target, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="container-page py-8 md:py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Om Checklistor.se
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Vi tror att vardagen blir enklare med rätt verktyg. Checklistor.se är skapat för att 
              hjälpa dig hålla koll på allt från flytt till deklaration – utan stress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Vårt mål</h3>
                <p className="text-sm text-muted-foreground">
                  Göra det enklare för alla att hålla koll på livets alla göromål.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Enkelt & snabbt</h3>
                <p className="text-sm text-muted-foreground">
                  Hitta rätt checklista på sekunder. Ingen registrering krävs.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">För alla</h3>
                <p className="text-sm text-muted-foreground">
                  Våra checklistor är gratis och tillgängliga för alla.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Hur fungerar det?</h2>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span><strong className="text-foreground">Hitta en checklista</strong> – Sök eller bläddra bland våra kategorier.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span><strong className="text-foreground">Bocka av punkterna</strong> – Direkt i webbläsaren, sparas automatiskt.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span><strong className="text-foreground">Skriv ut eller dela</strong> – Ta med dig listan eller skicka till andra.</span>
              </li>
            </ol>

            <div className="bg-card border border-border rounded-xl p-8 mt-12 text-center">
              <CheckSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Har du förslag på nya checklistor?
              </h3>
              <p className="text-muted-foreground mb-4">
                Vi lyssnar gärna på dina idéer för att göra sidan ännu bättre.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
