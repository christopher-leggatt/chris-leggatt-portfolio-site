import { Meetup } from "@/models/Meetup";
import connectDB from "./connect-db";

export async function getMeetup() {
  try {
    await connectDB();
    const Meetups = await Meetup?.find().lean();

    return {
      meetup: Meetups,
    };
  } catch (error) {
    return { error };
  }
}
