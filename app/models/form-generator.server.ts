import type { User } from "./user.server";
import { supabase } from "./user.server";

export type FormGenerator = {
  id: string;
  userId: string;
  messages: string;
};

export async function getFormGeneratorListItems({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("form-generator")
    .select("id, userId, form-generator")
    .eq("userId", userId);

  return data;
}

export async function createFormGenerator({
  messages,
  id,
  userId,
}: Pick<FormGenerator, "messages" | "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("form-generator")
    .insert([{ messages, id, userId }])
    .single();

  if (!error) {
    return data;
  }

  return error;
}

export async function deleteFormGenerator({
  id,
  userId,
}: Pick<FormGenerator, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("form-generator")
    .delete({ returning: "minimal" })
    .match({ id, userId });

  if (!error) {
    return {};
  }

  return null;
}

export async function getFormGenerator({
  id,
  userId,
}: Pick<FormGenerator, "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("form-generator")
    .select("*")
    .eq("userId", userId)
    .eq("id", id)
    .single();

  if (!error) {
    return {
      userId: data.userId,
      id: data.id,
      messages: data.messages
    };
  }

  return null;
}