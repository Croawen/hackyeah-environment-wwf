import { ObjectId } from "bson";
import { Typegoose } from "typegoose";

export class ReportSchema extends Typegoose {
  _id: ObjectId;
}
