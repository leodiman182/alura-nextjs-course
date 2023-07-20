import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink {...props} href={href}>
      {children}
    </NextLink>
  );
}
