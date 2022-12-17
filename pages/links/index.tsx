import Layout from "../../layouts/layout";

type Links = Array<{
  txt: string;
  href: string;
}>;

const good_piracy_webistes: Links = [
  {
    txt: "Anime",
    href: "https://animixplay.to/",
  },
  {
    txt: "Movie",
    href: "https://vegamovies.day",
  },
  {
    txt: "Movie2",
    href: "https://hurawatch.at/",
  },
];

const develeoper_stuff: Links = [
  {
    txt: "free API to use",
    href: "https://github.com/public-apis/public-apis",
  },
  {
    txt: "frequently used SVG",
    href: "https://github.com/n3r4zzurr0/svg-spinners",
  },
];

export default function Links() {
  return (
    <>
      <div>
        <h3># Friends</h3>
        <p>
          its totaly not like i dont have friends i just dont want to scrifice
          their privacy...
        </p>
      </div>
      <div>
        <h3># Good Piracy Website </h3>
        <ul>{toJSX(good_piracy_webistes)}</ul>
      </div>
      <div>
        <h3># Develeoper Stuff </h3>
        <ul>{toJSX(develeoper_stuff)}</ul>
      </div>
    </>
  );
}

function toJSX(e: Links) {
  return e.map((item) => {
    return (
      <li key={item.txt}>
        <a rel="noreferrer" target={"_blank"} href={item.href}>
          {item.txt}
        </a>
      </li>
    );
  });
}
