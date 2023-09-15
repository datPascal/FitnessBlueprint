import type { User } from "./user.server";
import { supabase } from "./user.server";

export type PrivacyPolicy = {
  id: string;
  userId: string;
  questions: string;
  privacyPolicy: string;
};

export async function getPrivacyPolicyListItems({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("privacy-policies")
    .select("*")
    .eq("userId", userId);

  return data;
}

export async function createPrivacyPolicy({
  questions,
  privacyPolicy,
  id,
  userId,
}: Pick<PrivacyPolicy, "questions" | "privacyPolicy" | "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("privacy-policies")
    .insert([{ questions, privacyPolicy, id, userId }])
    .single();

  if (!error) {
    return data;
  }
  console.log("error", error)
  return error;
}

export async function deletePrivacyPolicy({
  id,
  userId,
}: Pick<PrivacyPolicy, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("privacy-policies")
    .delete({ returning: "minimal" })
    .match({ id, userId });

  if (!error) {
    return {};
  }

  return null;
}

export async function getPrivacyPolicy({
  id,
  userId,
}: Pick<PrivacyPolicy, "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("privacy-policies")
    .select("*")
    .eq("userId", userId)
    .eq("id", id)
    .single();

  if (!error) {
    return {
      userId: data.userId,
      id: data.id,
      questions: data.questions,
      privacyPolicy: data.privacyPolicy
    };
  }

  return null;
}

export async function updatePrivacyPolicy({
  questions,
  privacyPolicy,
  id,
  userId,
}: Pick<PrivacyPolicy, "questions" | "privacyPolicy" | "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("privacy-policies")
    .update({ questions, privacyPolicy })
    .eq("id", id)
    .eq("userId", userId)
    .single();

  if (!error) {
    console.log("data", data)
    return data;
  }
  
  console.log("error", error)
  return error;
}
