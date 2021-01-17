import { getPostData, getPostList } from '../../service/posts'
import { GetStaticPaths, GetStaticProps } from "next";
import Head from 'next/head'

export default function Post({ postData }: { postData: any }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2>{postData.title}</h2>
      <p>{postData.content}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result: any = await getPostList();
  console.log(result);
  return {
    paths: result,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (theParams) => {
  console.log('params = ', theParams);
  // @ts-ignore
  const postData = await getPostData(theParams.params.name)
  console.log(postData)
  return {
    props: {
      postData
    },
  }
}
