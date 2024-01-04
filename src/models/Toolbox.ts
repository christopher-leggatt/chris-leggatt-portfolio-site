import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

class ToolboxItem {
  @prop({ required: true })
  public url!: string;

  @prop({ required: true })
  public title!: string;

  @prop({ required: true, type: () => [String] })
  public types!: string[];

  @prop({ required: true })
  public description!: string;
}

@post<ToolboxClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<ToolboxClass[]>(/^find/, function (docs) {
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
    collection: "toolbox",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class ToolboxClass {
  @prop({ required: true, type: () => [ToolboxItem] })
  public site: ToolboxItem[];

  @prop({ required: true, type: () => [ToolboxItem] })
  public software: ToolboxItem[];

  @prop({ required: true, type: () => [ToolboxItem] })
  public tech_stack: ToolboxItem[];

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Toolbox = mongoose.models.ToolboxClass || getModelForClass(ToolboxClass);
export { Toolbox, ToolboxClass };
