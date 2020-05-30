import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class LatestCatModel extends Document {
  @Prop({
    type: Map,
    of: String,
  })
  family: Map<string, string>;
}

export const LatestCatSchema = SchemaFactory.createForClass(LatestCatModel);
