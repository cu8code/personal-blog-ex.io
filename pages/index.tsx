import style from "../styles/Style.module.css";
import Layout from "../layouts/layout";

// async function GetQuote() {
//   const data = await fetch("https://api.quotable.io/random");
//   const d: {
//     content: string;
//   } = data.json() as unknown as { content: string };
//   return <i>{d.content}</i>;
// }

// TODO make this date fetching through some external API
function ageCal() {
  const yer = Number(Date().slice(11, 16));
  const myAge = 2004;
  return yer - myAge;
}

const techIUse = `
VIM, LINUX, GNOME, TYPESCRIPT, REACT, nextjs, wayland,
lazygit, markdown, git
`.toUpperCase();

const bullshit = ` 
Hello Friend,
welcome to my corner of the internet.I am ankan roy I am a ${ageCal()} 
old guy from India, who loves computers and softwares.I am also a CS
grad.But most importantly I am a man of culture. 
`;

const bullshit2 = `
This place is home for all my psychological dysfunctioning.
A place where I am in control, with no censorship or manupilation.
A place where my words don't get mixed up with noise.
`;

const bullshit3 = `
Speaking of man of culture. Do you like cross play I like it a lot, but due to
financial reason I have not been able to buy cross play stuff, Now you have the
opportunity, if you get me into an internship I promise you to give free early
access to my cross play OnlyFans… (but remember I am just a male with slightly 
above average PP + i am not sexy) 
`;

const whatDoIlike = ` Anime, Manga, Manhwa, Coding, Politics
`.toUpperCase();

const bestMovies = ` Super 30, Dangal
`.toUpperCase();

const best_TV_show = ` Silicon Valley
`.toUpperCase();

const games = ` clash of Clan, pubgm
`.toUpperCase();

const best_Anime = ` Attack on Titan, Demon Slayer
`.toUpperCase();

export default function Home(props: {}) {
  return (
    <Layout>
      <div className={`${style.padding}`}>
        <div>
          <p>{bullshit}</p>
          <i>{bullshit2}</i>
          <p>{bullshit3}</p>
        </div>
        <table>
          <tbody>
            <tr>
              <th className={style.neonText}>Q</th>
              <th className={style.neonText}>Ans</th>
            </tr>
            <tr>
              <td> Tech </td>
              <td>{techIUse}</td>
            </tr>
            <tr>
              <td> Hobby </td>
              <td>{whatDoIlike}</td>
            </tr>
            <tr>
              <td> Movies </td>
              <td>{bestMovies}</td>
            </tr>
            <tr>
              <td> TV </td>
              <td>{best_TV_show}</td>
            </tr>
            <tr>
              <td> Games </td>
              <td>{games}</td>
            </tr>
            <tr>
              <td> Anime </td>
              <td>{best_Anime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
