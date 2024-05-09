/* eslint-disable jsx-a11y/anchor-has-content */

import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { UrlObject } from 'url';

const CustomLink = ({ href, ...rest }: any) => {
  console.log(href, typeof href, ...rest);
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={{ pathname: href }} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" ref="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
