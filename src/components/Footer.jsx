import React from 'react';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Email', href: 'mailto:kimalfredmolina1224@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/kimalfredmolina', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kim-alfred-a-molina/', external: true }
  ];

  return (
    <footer
      className={`transition-colors duration-500 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div
          className={`border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
        />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}
          >
            © {currentYear} Kim Alfred Molina
          </p>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={`text-sm font-medium transition-colors duration-200 ${isDark
                    ? 'text-neutral-400 hover:text-red-500'
                    : 'text-neutral-600 hover:text-red-600'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;