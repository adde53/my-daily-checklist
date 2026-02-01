import { CheckSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <CheckSquare className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Checklistor.se</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Standardchecklistor för vardagliga situationer. Kopiera, skriv ut eller använd direkt online.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Kategorier</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kategori/flytt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Flytt & Boende
                </Link>
              </li>
              <li>
                <Link to="/kategori/ekonomi" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ekonomi
                </Link>
              </li>
              <li>
                <Link to="/kategori/jobb" className="text-muted-foreground hover:text-foreground transition-colors">
                  Jobb & Utbildning
                </Link>
              </li>
              <li>
                <Link to="/kategori/resor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resor & Semester
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/om" className="text-muted-foreground hover:text-foreground transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/integritet" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Checklistor.se. Alla rättigheter förbehållna.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Gjord med <Heart className="w-4 h-4 text-destructive fill-destructive" /> i Sverige
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
