import { ObjectId } from "bson";
import { Typegoose, prop } from "typegoose";
import { ReportType } from "../enum/report-type.enum";

export class ReportSchema extends Typegoose {
  _id: ObjectId;
  // user data
  @prop()
  type: ReportType;
  @prop()
  name: string;
  @prop()
  surname: string;
  @prop()
  city: string;
  @prop()
  userEmail: string;
  @prop()
  address: string;
  @prop()
  postcode: string;
  // report to
  @prop()
  facilityName: string;
  @prop()
  facilityCity: string;
  @prop()
  facilityAddress: string;
  @prop()
  facilityPostcode: string;
  @prop()
  facilityEmail: string;
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
