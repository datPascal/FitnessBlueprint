import { supabase } from "./user.server";

export type Blog = {
  title: string;
  description: string;
  img: string;
  img_alt: string;
  tags: string;
  blogpost: string;
  created_at: Date;
};

export async function getBlogposts() {
  
    let data = await supabase
        .from('blog')
        .select('title, description, img, img_alt, tags, created_at, url')

  return data.data;
}


export async function getBlogpost({ url }) {
    let data = await supabase
        .from('blog')
        .select('title, description, blogpost')
        .eq("url", url);
  
    return data.data[0];
  }
