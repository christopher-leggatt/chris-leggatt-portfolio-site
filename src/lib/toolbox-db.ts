import { Toolbox } from "@/models/Toolbox";
import connectDB from "./connect-db";

export async function getToolbox() {
  try {
    await connectDB();
    const Toolboxes = await Toolbox.findOne().lean();   

    return {
      toolbox: Toolboxes,
    };
  } catch (error) {
    return { error };
  }
}
