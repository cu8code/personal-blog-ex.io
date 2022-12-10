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
Do you think this website is not cool, or it does not look good? If you think so,
then we can't be friends. You see, this website represents what I like, 
and how I think the WEB should look. In my world, no one is trying to make you stay
in their revolutionary app and making you play stupid games or trying to sell
you bullshit content. The world should be purely content based, and not a 
toxic distracting Westland. Information should be available at minimum cost, not
free, let it be paid, but the price should not be unreasonable I think you get it
I like minimal modern heavy text based website. If you want to reach me, message
me at discord.
`;

const techIUse = `
VIM | LINUX | GNOME | TYPESCRIPT | REACT | nextjs | wayland | lazygit | 
markdown | git
`.toUpperCase();

const bullshit = `
Hello Friend, welcome to my corner of the internet. I am ankan roy 
I am a 16 old guy from India, who loves computers and softwares. I am also a CS grad.
But most importantly I am a man of culture. 
`;

const bullshit2 = `
This place is home for all my psychological dysfunctioning.
A place where I am in control, with no censorship or manupilation.
A place where my words don't get mixed up with noise.
`;

const whatDoIlike = `
Anime | Manga | Manhwa | Coding | Politics
`.toUpperCase();

export default function Home(props: {}) {
  {
    return (
      <Layout>
        <div className={`${style.padding}`}>
          <p>{bullshit}</p>
          <p>
            <i>{bullshit2}</i>
          </p>
          <h3># About Me ?</h3>
          <p> {aboutMe} </p>
          <h3># Tech I Use ?</h3>
          <p>{techIUse}</p>
          <h3># What do i like ?</h3>
          <p>{whatDoIlike}</p>
          <h3># Best Movies ?</h3>
          <p>Super 30 | Dangal</p>
          <h3># Best TV show ?</h3>
          <p>Silicon Valley</p>
          <h3># Games ?</h3>
          <p>clash of Clan | pubgm</p>
          <h3># Best Anime ?</h3>
          <p>Attack on Titan | Demon Slayer</p>
        </div>
      </Layout>
    );
  }
}
