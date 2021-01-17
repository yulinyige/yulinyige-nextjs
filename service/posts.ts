import path from 'path'
import fs from "fs";
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostList(): Promise<Array<any>> {
  const res = await fetch('http://127.0.0.1:7001/api/post');
  const resData: any = await res.json();
  console.log('网络请求 = ', JSON.stringify(resData));
  return resData.data;
}

export async function getPostData(name: string): Promise<any> {
  const fullPath = path.join(postsDirectory, `${name}.md`)
  console.log('读取文章: ', fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    name,
    ...matterResult.data
  }
}
