import style from "../styles/Style.module.css";
import Layout from "../layouts/layout";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://api.quotable.io/random`);
//   const data = await res.json();
//
//   // Pass data to the page via props
//   return { props: { data } };
// }

const aboutMe = `
Do you think this webiste is +not cool or it dose not look good+ ?
If you think so, then we can't be friends. You see this webiste represents
what i like, and how i think the web should look. In my world no one is trying
to make you stay in their revolutionary app and making you play stupid games, 
or trying to sell you bullshit content. The world should be purly content based,
and not a toix+distracting wastland. +Information should be avaliable at minimum 
cost, not free, let it be paid, but the price should not be unresonalble+
`;

const techIUse = `
VIM | LINUX | GNOME | TYPESCRIPT | REACT
`.toUpperCase();

const whatDoIlike = `
Anime | Manga | Manhwa | Coding | Politics
`.toUpperCase();

export default function Home(props: {}) {
  {
    return (
      <Layout>
        <div className={`${style.padding}`}>
          <h3>About Me ?</h3>
          <p> {aboutMe} </p>
          <h3>TECH I USE ?</h3>
          <p>{techIUse}</p>
          <h3>What do i like ?</h3>
          <p>{whatDoIlike}</p>
          <h3>Buttons</h3>
        </div>
      </Layout>
    );
  }
}
