import { Document, Schema } from 'mongoose';

export interface OriginalCatModel extends Document {
  family: Map<string, string>;
}

export const OriginalCatSchema = new Schema({
  family: Map,
});
