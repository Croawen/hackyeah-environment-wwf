import { ObjectId } from "bson";
import { prop, Typegoose } from "typegoose";

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
  longitude: number;

  @prop()
  latitude: number;
}
