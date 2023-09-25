import { supabase } from "./user.server";


export async function createMailListEntry({
  mail
}) {
  const { data, error } = await supabase
    .from("mailList")
    .insert([{ mail }])
    .single();

  if (!error) {
    return data;
  }
  else {
    console.log(error)
  }

  return null;
}