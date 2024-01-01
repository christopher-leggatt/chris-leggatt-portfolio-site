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

// export async function createExperience(title: string) {
//   try {
//     await connectDB();

//     const Experience = await Experience.create({ title });

//     return {
//       Experience,
//     };
//   } catch (error) {
//     return { error };
//   }
// }

// export async function getExperience(id: string) {
//   try {
//     await connectDB();

//     const parsedId = stringToObjectId(id);

//     if (!parsedId) {
//       return { error: "Experience not found" };
//     }

//     const Experience = await Experience.findById(parsedId).lean().exec();
//     if (Experience) {
//       return {
//         Experience,
//       };
//     } else {
//       return { error: "Experience not found" };
//     }
//   } catch (error) {
//     return { error };
//   }
// }

// export async function updateExperience(
//   id: string,
//   { title, completed }: { title?: string; completed?: boolean }
// ) {
//   try {
//     await connectDB();

//     const parsedId = stringToObjectId(id);

//     if (!parsedId) {
//       return { error: "Experience not found" };
//     }

//     const Experience = await Experience.findByIdAndUpdate(
//       parsedId,
//       { title, completed },
//       { new: true }
//     )
//       .lean()
//       .exec();

//     if (Experience) {
//       return {
//         Experience,
//       };
//     } else {
//       return { error: "Experience not found" };
//     }
//   } catch (error) {
//     return { error };
//   }
// }

// export async function deleteExperience(id: string) {
//   try {
//     await connectDB();

//     const parsedId = stringToObjectId(id);

//     if (!parsedId) {
//       return { error: "Experience not found" };
//     }

//     const Experience = await Experience.findByIdAndDelete(parsedId).exec();

//     if (Experience) {
//       return {};
//     } else {
//       return { error: "Experience not found" };
//     }
//   } catch (error) {
//     return { error };
//   }
// }
