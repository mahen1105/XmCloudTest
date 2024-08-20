import React from 'react';
import { Image, ImageField, Link } from '@sitecore-jss/sitecore-jss-nextjs';

interface NavigationLink {
  title: {
    value: string;
    // Assuming 'editable' isn't needed in this front-end display component.
  };
  link: {
    value: {
      href: string;
      text?: string;
      anchor?: string;
      linktype?: string;
      class?: string;
      title?: string;
      target?: string;
      querystring?: string;
      id?: string;
    };
    // 'editable' fields and other metadata are ignored in the front-end display.
  };
}

interface Fields {
  Logo: ImageField;
  Navigations: NavigationLink[];
}

interface HeaderProps {
  params: { [key: string]: string };
  fields: Fields;
}

export const Default = ({ fields: { Logo, Navigations } }: HeaderProps): JSX.Element => {
  console.log('Navigations=>', Navigations);
  return (
    <header className="container-default">
      <nav>
        <Image field={Logo} alt="Company Logo" />
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          {Navigations?.map((link, index) => (
            <li key={index} style={{ marginLeft: index !== 0 ? '15px' : '0' }}>
              {index !== 0 && <span aria-hidden="true">|</span>}
              <Link field={link.link} title={link.title?.value}>
                {link.title?.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
