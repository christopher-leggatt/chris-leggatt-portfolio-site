import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
  } from "@typegoose/typegoose";
  import mongoose from "mongoose";
  
  class ChangelogItem { // Represents individual changelog items
    @prop({ required: true })
    public title!: string;
  
    @prop({ required: true })
    public description!: string;
  
    @prop({ required: true })
    public date!: Date;   
  }
  
  @post<ChangelogClass>("save", function (doc) { // Defines the structure of the changelog document
    if (doc) {
      doc.id = doc._id.toString();  // Post-save hook to convert MongoDB ObjectId to string in query results.
      doc._id = doc.id;
    }
  })
  @post<ChangelogClass[]>(/^find/, function (docs) {
    // @ts-ignore
    if (this.op === "find") { // Post-find hook to convert MongoDB ObjectId to string in query results.
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
  @index({ title: 1 }) // Creates an index on the title field for faster queries
  class ChangelogClass {
    @prop({ required: true, type: () => [ChangelogItem] })
    public upcoming!: ChangelogItem[];
  
    @prop({ required: true, type: () => [ChangelogItem] })
    public completed!: ChangelogItem[];   
  
    _id: mongoose.Types.ObjectId | string;
  
    id: string;
  }
  
  // Exports the Changelog model, creating it if it doesn't already exist
  const Changelog = mongoose.models.ChangelogClass || getModelForClass(ChangelogClass);
  export { Changelog, ChangelogClass };
  