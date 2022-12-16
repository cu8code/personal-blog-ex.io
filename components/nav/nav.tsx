import style from "./Nav.module.css";
import Link from "next/link";

export function Nav(props: {
  links: Array<{
    name: string;
    href: string;
  }>;
}) {
  return (
    <nav className={style.nav}>
      <ul>
        {props.links.map((l) => (
          <li key={l.href}>
            <Link  href={l.href}>
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
