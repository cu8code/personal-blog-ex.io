import Head from "next/head";
import { Nav } from "../components/nav/nav";
import style from "../styles/Style.module.css";

const TITLE = "Ankan Roy FrontEnd Web developer";
const S_TITLE = "[CuXCode]";
const DESCRIPTION = "An Website about ME and My Daily Adventure";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`${style.neonText}`}>
        {S_TITLE}
        <span className={style.blink}>⚡</span>
      </h1>
      <Nav
        links={[
          { name: "~", href: "/" },
          { name: "~/Blog", href: "/blog" },
        ]}
      ></Nav>
      {props.children}
    </div>
  );
}
