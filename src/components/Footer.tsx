import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-amber-400 mb-4">
              Village Artisan Bakery
            </div>
            <p className="text-amber-400 mb-4 max-w-md">
              Transform your business with our innovative solutions. Streamline operations, boost productivity, and drive growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-amber-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
            <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-amber-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-400">
          <p>&copy; {currentYear} Village Artisan Bakery. {t('footer.rights')}</p>
          <p className="text-sm mt-2">
            Website created by{' '}
            <a 
              href="mailto:info@datasciencetech.ca" 
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Data Science Tech
            </a>
          </p>
          <p className="text-sm mt-1">
            This website uses cookies and analytics to improve user experience. View our{' '}
            <Link to="/privacy-policy" className="text-amber-400 hover:text-amber-300 transition-colors">
              privacy policy
            </Link>
            {' '}and{' '}
            <Link to="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">
              terms of service
            </Link>
            {' '}for details.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
