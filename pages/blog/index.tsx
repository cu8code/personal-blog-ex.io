import Layout from "../../layouts/layout";

const url = "https://fokir.hashnode.dev/";

const articleQuery = `
query{
  user(username:"fokir") {
    publication {
      posts(page:0) {
        title
        brief
        slug
        cuid
      }
    }
  }
}
`;

export async function getServerSideProps() {
  const query = articleQuery;
  const variables = {};

  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const data = await res.json();
  console.log(data.user);
  return { props: { data } };
}

type prop = {
  data: {
    data: {
      user: {
        publication: {
          posts: [
            {
              slug: string;
              title: string;
            }
          ];
        };
      };
    };
  };
};

export default function Blog(props: prop) {
  const data = props.data.data.user.publication.posts;
  return (
    <Layout>
    <h2>All my blogs are present in hashnode</h2>
      <ul>
        {data.map((e) => {
          return (
            <li key={e.slug}>
              <a rel="noreferrer" target={"_blank"} href={`${url}${e.slug}`}>
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
