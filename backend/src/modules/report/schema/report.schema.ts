import { ObjectId } from "bson";
import { Typegoose, prop } from "typegoose";

export class ReportSchema extends Typegoose {
  _id: ObjectId;
  // user data
  @prop()
  name: string;
  @prop()
  surname: string;
  @prop()
  city: string;
  @prop()
  user_email: string;
  @prop()
  address: string;
  @prop()
  postcode: string;
  // report to
  @prop()
  facility_name: string;
  @prop()
  facility_city: string;
  @prop()
  facility_address: string;
  // body
  @prop()
  report: string;
  @prop()
  reason: string;
  // Evidence
  @prop()
  evidences: string[];
  @prop()
  photos: string[];
}
