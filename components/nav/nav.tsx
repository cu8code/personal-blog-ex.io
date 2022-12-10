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
  console.log("sexcy");
  
  console.log(props.links[0].name)
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
