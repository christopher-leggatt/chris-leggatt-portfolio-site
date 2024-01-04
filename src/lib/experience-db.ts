import { Experience } from "@/models/Experience";
import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";

export async function getExperience() {
  try {
    await connectDB();
    const Experiences = await Experience?.find().lean();

    return {
      experience: Experiences,
    };
  } catch (error) {
    return { error };
  }
}
