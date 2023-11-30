import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<ExperienceClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<ExperienceClass[]>(/^find/, function (docs) {
  // @ts-ignore
  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();
      doc._id = doc.id;
    });
  }
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "experience",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class ExperienceClass {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  company: string;

  @prop({ required: true })
  company_url: string;

  @prop({ required: true })
  duration: string;

  @prop({ required: true })
  description: string;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Experience = mongoose.models.ExperienceClass || getModelForClass(ExperienceClass);
export { Experience, ExperienceClass };
