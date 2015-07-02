// door.js
//
// mongo data model definition for a Revit door instance.
//
// Copyright 2015 by Jeremy Tammik, Autodesk Inc.

var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var RvtUniqueId = String;

// use Revit UniqueId for door instances.

var doorSchema = new Schema(
  { _id          : RvtUniqueId // suppress automatic generation
    , project_id : ObjectId
    , level      : String
    , tag        : String
    , firerating : Number },
  { _id: false } // suppress automatic generation
);

mongoose.model( 'Door', doorSchema );
