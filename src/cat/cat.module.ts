import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LatestCatSchema } from './models/latest-cat.model';
import { RawCatSchema } from './models/raw-cat.model';
import { OriginalCatSchema } from './models/original-cat.model';
import { CatController } from './cat.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'LatestCatModel', schema: LatestCatSchema },
      { name: 'OriginalCatModel', schema: OriginalCatSchema },
      { name: 'RawCatModel', schema: RawCatSchema },
    ]),
  ],
  controllers: [CatController],
})
export class CatModule {}
