import type { User } from "./user.server";
import { supabase } from "./user.server";

// Queries

export type SQLQueries = {
  id: string;
  userId: string;
  messages: string;
  title: string;
};

export async function getSQLQueriesListItems({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("sqlthroughai-queries")
    .select("*")
    .eq("userId", userId)
    .order("created_at", { ascending: false })
    .limit(10);
  
  return data;
}

export async function createSQLQueries({
  messages,
  userId,
  title,
}: Pick<SQLQueries, "messages" | "title"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-queries")
    .insert([{ messages, title, userId }])
    .single();

  if (!error) {
    return data;
  }

  return error;
}

export async function updateSQLQuery({
  messages,
  userId,
  title,
  id
}: Pick<SQLQueries, "messages" | "title" | "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
  .from("sqlthroughai-queries")
  .update([{ messages, title }])
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

export async function deleteSQLQueries({
  id,
  userId,
}: Pick<SQLQueries, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("sqlthroughai-queries")
    .delete({ returning: "minimal" })
    .match({ id, userId });

  if (!error) {
    return {};
  }

  return null;
}

export async function getSQLQueries({
  id,
  userId,
}: Pick<SQLQueries, "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-queries")
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






//// Databases


export type Database = {
  id: string;
  title: string;
  database: string;
  userId: string;
};

export async function getDatabases({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("sqlthroughai-databases")
    .select("id, database, userId, title")
    .eq("userId", userId)
    .order("created_at", { ascending: false })
    .limit(10)

  return data;
}

export async function createDatabase({
  title,
  database,
  userId,
}: Pick<Database, "database" | "title"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-databases")
    .insert([{ title, database, userId: userId }])
    .single();

  if (!error) {
    return data;
  }
  console.log(error)
  return null;
}

export async function updateDatabase({
  title,
  database,
  userId,
  id
}: Pick<Database, "database" | "title" | "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-databases")
    .update([{ title, database }])
    .match({ id, userId: userId });

  if (!error) {
    return data;
  }
  console.log(error)
  return null;
}

export async function deleteDatabase({
  id,
  userId,
}: Pick<Database, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("sqlthroughai-databases")
    .delete({ returning: "minimal" })
    .match({ id, userId: userId });

  if (!error) {
    return {};
  }

  return null;
}

export async function getDatabase({
  id,
  userId,
}: Pick<Database, "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-databases")
    .select("*")
    .eq("userId", userId)
    .eq("id", id)
    .single();

  if (!error) {
    return {
      userId: data.userId,
      id: data.id,
      title: data.title,
      database: data.database,
    };
  }

  return null;
}








//// sqlthroughai-connections

export type Connection = {
  id: string;
  database1: string;
  database2: string;
  column1: string;
  column2: string;
  userId: string;
};

export async function getConnectionById({
    id,
    userId,
  }: Pick<Connection, "id"> & { userId: User["id"] }) {
      const { data, error } = await supabase
      .from("sqlthroughai-connections")
      .select("*")
      .eq("id", id)
      .eq("userId", userId)
      .single();
  
    if (!error) {
      return data;
    }
  
    return null;
  }
  

export async function getConnections({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("sqlthroughai-connections")
    .select("id, database1, database2, column1, column2, userId")
    .eq("userId", userId);

  return data;
}

export async function createConnection({
  id,
  database1,
  database2,
  column1,
  column2,
  userId,
}: Pick<
  Connection,
  "database1" | "database2" | "column1" | "column2" | "id"
> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("sqlthroughai-connections")
    .insert([
      { id, database1, database2, column1, column2, userId: userId },
    ])
    .single();

  if (!error) {
    return data;
  }

  return null;
}

export async function updateConnection({
    id,
    database1,
    database2,
    column1,
    column2,
    userId,
  }: Pick<
    Connection,
    "id" | "database1" | "database2" | "column1" | "column2"
  > & { userId: User["id"] }) {
    const { data, error } = await supabase
      .from("sqlthroughai-connections")
      .update({ database1, database2, column1, column2 })
      .match({ id, userId: userId });
  
    if (!error) {
      return data;
    }
  
    return error;
  }

  

export async function deleteConnection({
  id,
  userId,
}: Pick<Connection, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("sqlthroughai-connections")
    .delete({ returning: "minimal" })
    .match({ id, userId });

  if (!error) {
    return {};
  }

  return null;
}