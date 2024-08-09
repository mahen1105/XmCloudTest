import React from 'react';
import { Image, ImageField, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type NavigationLink = {
  title: string;
  link: LinkField;
};

interface Fields {
  Logo: ImageField;
  Navigations: NavigationLink[];
}

export type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  console.log('props.fields.Navigations=>', props.fields.Navigations);
  return (
    <div className="container-default">
      <nav>
        <Image field={props.fields.Logo} />
        <div>
          {props.fields.Navigations?.map((link: NavigationLink, index: number) => (
            <React.Fragment key={index}>
              {index != 0 ? <span>&nbsp;|&nbsp;</span> : ''}
              <Link field={link.link}>{link.title}</Link>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
};
