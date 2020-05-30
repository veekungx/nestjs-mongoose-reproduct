import { Controller, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LatestCatModel } from './models/latest-cat.model';
import { Model } from 'mongoose';
import { RawCatModel } from './models/raw-cat.model';
import { OriginalCatModel } from './models/original-cat.model';

@Controller('cat')
export class CatController {
  constructor(
    @InjectModel('LatestCatModel')
    private readonly latestCatModel: Model<LatestCatModel>,
    @InjectModel('RawCatModel')
    private readonly rawCatModel: Model<RawCatModel>,
    @InjectModel('OriginalCatModel')
    private readonly originalCatModel: Model<OriginalCatModel>,
  ) {}

  async onApplicationBootstrap() {
    await this.originalCatModel.deleteMany({});
    await this.latestCatModel.deleteMany({});
    await this.rawCatModel.deleteMany({});

    const originalCat = new this.originalCatModel();
    const latestCat = new this.latestCatModel();
    const rawCat = new this.rawCatModel();

    originalCat.family = new Map();
    latestCat.family = new Map();
    rawCat.family = new Map();

    console.log('===============================================');
    console.log('BEFORE STORE INTO DB');
    console.log('===============================================');
    console.log('orignalCat.family is instance of Map,', originalCat.family instanceof Map);
    console.log('latestCat.family is instance of Map,', latestCat.family instanceof Map);
    console.log('rawCat.family is instance of Map,', rawCat.family instanceof Map);

    originalCat.family.set('1', 'Original');
    latestCat.family.set('1', 'Latest');
    rawCat.family.set('1', 'Raw');

    await originalCat.save();
    await latestCat.save();
    await rawCat.save();

    const retrieveOrignalCat = await this.originalCatModel.findOne();
    const retrieveLatestCat = await this.latestCatModel.findOne();
    const retrieveRawCat = await this.rawCatModel.findOne();

    console.log('\n===============================================');
    console.log('AFTER RETRIVE BACK FROM QUERY');
    console.log('===============================================');
    console.log(`retrieveOrignalCat.family is instance of Map, ${retrieveOrignalCat.family instanceof Map}`);
    console.log(`retrieveLatestCat.family is instance of Map, ${retrieveLatestCat.family instanceof Map} <=== THIS SHOULD BE TRUE`);
    console.log(`retrieveRawCat.family is instance of Map, ${retrieveRawCat.family instanceof Map} <=== THIS SHOULD BE TRUE\n`);

    console.log('\n===============================================');
    console.log('TRY Map.get() API');
    console.log('===============================================');

    try {
      console.log('Value from retrieveOrignalCat.family.get(1) =>', retrieveOrignalCat.family.get('1'));
    } catch (e) {
      console.log('ERROR:', e.message);
    }

    try {
      console.log('Value from retrieveLatestCat.family.get(1) =>', retrieveLatestCat.family.get('1'));
    } catch (e) {
      console.log('ERROR:', e.message);
    }
    try {
      console.log('Value from retrieveRawCat.family.get(1) =>', retrieveRawCat.family.get('1'));
    } catch (e) {
      console.log('ERROR:', e.message);
    }
  }
}
