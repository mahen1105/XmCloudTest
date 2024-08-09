import React from 'react';
import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

export type NavLinks = {
  fields: Fields;
  name: string;
}

interface Fields {
  Logo: ImageField;
  Navigations: NavLinks[];
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
          {
            props.fields.Navigations && props.fields.Navigations.map((link: NavLinks, index: number) => (
              <>
                {
                  index != 0 ? <span>&nbsp;|&nbsp;</span> : ''
                }
                {link.fields.Title.value}
              </>
            ))
          }
        </div>
      </nav>
    </div>
  );
};
