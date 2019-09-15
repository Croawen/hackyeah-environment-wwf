import { ObjectId } from "bson";
import { arrayProp, index, prop, Typegoose } from "typegoose";
import { ReportType } from "../../report/enum/report-type.enum";

@index({ location: "2dsphere" })
export class LocationSchema extends Typegoose {
  _id: ObjectId;

  @prop()
  name: string;

  @prop()
  city: string;

  @prop()
  address: string;

  @prop()
  email: string;

  @prop()
  postCode: string;

  @prop({ enum: ReportType })
  type: ReportType;

  @arrayProp({ items: Number })
  location: [number];
}
