import Link from "next/link";

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign up", href: "/auth/signup" },
    !currentUser && { label: "Sign in", href: "/auth/signin" },
    {
      label: "Api Document",
      href: "https://documenter.getpostman.com/view/15573144/UyxdKUVc",
    },
    currentUser && { label: "Sell Tickets", href: "/tickets/new" },
    currentUser && { label: "My Orders", href: "/orders" },
    currentUser && { label: "Sign out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light m-2">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>

      <div className="d-flex justify-content-end ">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
