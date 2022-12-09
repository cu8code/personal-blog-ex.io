import Head from "next/head";
import style from "../styles/Style.module.css";
import { Profile } from "../components/profile/profile";

const TITLE = "Ankan Roy FrontEnd Web developer";
const S_TITLE = "~/Ankan Roy";
const DESCRIPTION = "An Website about ME and My Daily Adventure";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.quotable.io/random`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function Home(props: {
  data: {
    content: string;
  };
}) {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`${style.neonText}`}>
        {S_TITLE}
        <span className={style.blink}>_</span>{" "}
      </h1>
      <i>{props.data.content}</i>
      <br />
      <div className={`${style.border} ${style.padding}`}>
        <h3>About Me ?</h3>
        <p>
          Think of a WEEB | with LIBRA BRAIN | with A linking for HORROR and
          TORTURE | with a hate for RAPIST | with a love of old tech | with a
          pro LGBT brain | with a LOVEEEE for GUNNNSSSS | with Super ANTI DRUG
          and ALCOHOL heart.
        </p>
        <h3>TECH I USE ?</h3>
        <p>VIM | LINUX | GNOME | TYPESCRIPT | REACT</p>
        <h3>BUTTONS !</h3>
        <p></p>
      </div>
    </div>
  );
}
