import Layout from "../../layouts/layout";
import useSWR from "swr";
import { useState } from "react";

const url = "https://fokir.hashnode.dev/";
const apiUrl = "https://api.hashnode.com/";

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

function fetcher() {
  const query = articleQuery;
  const variables = {};

  return fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => {
    return res.json().then((res) => {
      return res.data.user.publication.posts;
    });
  });
}

export default function Blog() {
  // const data = props.data.data.user.publication.posts;
  const { data, error } = useSWR(apiUrl, fetcher);
  if (error) {
    return <div>ERROR</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>All my blogs are present in hashnode</h2>
      <ul>
        {data.map((e: any) => {
          return (
            <li key={e.slug}>
              <a rel="noreferrer" target={"_blank"} href={`${url}${e.slug}`}>
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
