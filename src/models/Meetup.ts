import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<MeetupClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<MeetupClass[]>(/^find/, function (docs) {
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
    collection: "meetup",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class MeetupClass {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  link: string;

  @prop({ required: true })
  checked: boolean;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Meetup = mongoose.models.MeetupClass || getModelForClass(MeetupClass);
export { Meetup, MeetupClass };
