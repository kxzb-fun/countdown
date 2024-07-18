// src/services/api.js
import { supabase } from "../supabaseConfig";

export const fetchEvent = async () => {
  const { data } = await supabase.from("events").select("*");
  return data;
};

export const createEvent = async (eventData) => {
  await supabase.from("events").insert(eventData);
};

export const updateEvent = async (id, eventData) => {
  await supabase.from("events").update(eventData).eq("id", id);
};

export const deleteEvent = async (id) => {
  await supabase.from("events").delete().eq("id", id);
};
