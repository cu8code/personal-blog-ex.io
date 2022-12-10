import style from "./Nav.module.css";
import Link from "next/link";

export function Nav(
  props:{
    links:Array<{
      name:string,
      href:string,
    }>
  }
) {
  
  return (
    <nav className={style.gap}>
      {props.links.map((l) => (
        <Link key={l.href} className={`${style.gap} ${style.large}`} href={l.href}>
          {l.name}
        </Link>
      ))}
    </nav>
  );
}
