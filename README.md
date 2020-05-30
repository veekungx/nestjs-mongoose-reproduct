===============================================
PROBLEM
===============================================
Expect @Prop({ type: Map }) to be instance of Map after retrieved back from query

===============================================
OVERVIEW
===============================================
OriginalCatModel created with mongoose.Schema({}) from "mongoose"

LatestCatModel created with @Schema(), @Prop({ type: Map }) from "@nestjs/mongoose"

RawCatModel created with @Schema(), @Prop(raw({ type: Map })) from "@nestjs/mongoose"

===============================================
BEFORE STORE INTO DB
===============================================
orignalCat.family is instance of Map, true

latestCat.family is instance of Map, true

rawCat.family is instance of Map, true

===============================================
AFTER RETRIVE BACK FROM QUERY WITH model.findOne()
===============================================
retrieveOrignalCat.family is instance of Map, true

retrieveLatestCat.family is instance of Map, false

retrieveRawCat.family is instance of Map, false

===============================================
TRY WITH Map.get() API
===============================================
Value from retrieveOrignalCat.family.get("1") => Original

ERROR: retrieveLatestCat.family.get is not a function

ERROR: retrieveRawCat.family.get is not a function

===============================================
TRY WITH Object Key
===============================================
Value from retrieveOrignalCat.family["1"] => undefined

Value from retrieveLatestCat.family["1"] => Latest

Value from retrieveRawCat.family["1"] => Raw

================= END OF LINE ==================