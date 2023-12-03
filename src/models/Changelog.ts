import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
  } from "@typegoose/typegoose";
  import mongoose from "mongoose";
  
  class Item {
    @prop({ required: true })
    public title!: string;
  
    @prop({ required: true })
    public description!: string;
  
    @prop({ required: true })
    public date!: Date;   
  }
  
  @post<ChangelogClass>("save", function (doc) {
    if (doc) {
      doc.id = doc._id.toString();
      doc._id = doc.id;
    }
  })
  @post<ChangelogClass[]>(/^find/, function (docs) {
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
      collection: "changelog",
    },
    options: {
      allowMixed: Severity.ALLOW,
    },
  })
  @index({ title: 1 })
  class ChangelogClass {
    @prop({ required: true, type: () => [Item] })
    public upcoming!: Item[];
  
    @prop({ required: true, type: () => [Item] })
    public completed!: Item[];   
  
    _id: mongoose.Types.ObjectId | string;
  
    id: string;
  }
  
  const Changelog = mongoose.models.ChangelogClass || getModelForClass(ChangelogClass);
  export { Changelog, ChangelogClass };
  