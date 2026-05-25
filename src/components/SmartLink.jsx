// Link that "does the right thing" for in-page hash anchors AND route paths.
//
// - `to` starting with "#" → in-page anchor.
//     If currently on "/", render a regular <a> so browser smooth-scrolls.
//     Otherwise, route to "/#<hash>" via React Router.
// - any other `to` → React Router Link.
//
// This lets the navbar live across both the home page (sections) and the
// /coffee-snacks page without breaking either.

import { Link, useLocation } from 'react-router-dom';

export default function SmartLink({ to, children, onClick, ...rest }) {
  const location = useLocation();
  const isHash = typeof to === 'string' && to.startsWith('#');

  if (isHash) {
    if (location.pathname === '/') {
      return (
        <a href={to} onClick={onClick} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link to={`/${to}`} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
