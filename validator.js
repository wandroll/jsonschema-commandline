#!/usr/bin/env node

const Validator = require('jsonschema').Validator;
const JSONReader = require('jsonfile');
const Argv = require('yargs')
            .usage('Usage: $0 -s jsonschema jsonsample')
            .demandCommand(1)
            .demandOption(['s'])
            .argv;

let samplePath = Argv._[0];
let schemaPath = Argv.s;

console.dir ('validating %d against %d', samplePath, schemaPath);

let sample = JSONReader.readFileSync(samplePath);
let schema = JSONReader.readFileSync(schemaPath);

var v = new Validator();
console.log(v.validate(sample, schema));
