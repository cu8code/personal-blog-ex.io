import Head from "next/head";
import { Nav } from "../../components/nav/nav";

const TITLE = "Ankan Roy FrontEnd Web developer";
const S_TITLE = "~/Ankan Roy";
const DESCRIPTION = "An Website about ME and My Daily Adventure";
export default function Blog(params: {}) {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav links={["~", "~/blog"]}></Nav>
    </div>
  );
}
