import Layout from "../../layouts/layout";

type Links = Array<{
  txt: string;
  href: string;
}>;

const apps: Links = [
  {
    txt: "Some",
    href: "",
  },
];

export default function Links() {
  return (
    <Layout>
      <div>
        <h3>Friends</h3>
        <ul>{toJSX(apps)}</ul>
      </div>
      <div>
        <h3>Apps</h3>
        <ul>{toJSX(apps)}</ul>
      </div>
      <div>
        <h3>Cool websites</h3>
        <ul>{toJSX(apps)}</ul>
      </div>
      <div>
        <h3>Repository</h3>
        <ul>{toJSX(apps)}</ul>
      </div>
    </Layout>
  );
}

function toJSX(e: Links) {
  return e.map((item) => {
    return (
      <a key={item.txt} href={item.href}>
        {item.txt}
      </a>
    );
  });
}
