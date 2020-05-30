import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class RawCatModel extends Document {
  //Similar to LatestCatModel but wrapped with raw()
  @Prop(
    raw({
      type: Map,
      of: String,
    }),
  )
  family: Map<string, string>;
}

export const RawCatSchema = SchemaFactory.createForClass(RawCatModel);
