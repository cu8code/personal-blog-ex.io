import Link from "next/link";
import style from "./Nav.module.css";

export function Nav(props: { links: string[] }) {
  return (
    <nav className={style.gap}>
      {props.links.map((l) => (
        <a className={`${style.gap} ${style.large}`} href={l}>
          {l}
        </a>
      ))}
    </nav>
  );
}
