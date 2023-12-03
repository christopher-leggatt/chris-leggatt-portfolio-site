import { Changelog } from "@/models/Changelog";
import connectDB from "./connect-db";

export async function getChangelog() {
  try {
    await connectDB();
    const Changelogs = await Changelog.findOne().lean();

    return {
      changelog: Changelogs,
    };
  } catch (error) {
    return { error };
  }
}
