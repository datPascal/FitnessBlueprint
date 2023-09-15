import { supabase } from "./user.server";

export type App = {
  title: string;
  description: string;
  img: string;
  img_alt: string;
  buttonText: string;
  index: string;
  created_at: Date;
  svg: string;
};

export async function getApps() {
  
    let data = await supabase
    .from('apps')
    .select('*')

  return data.data;
}

