'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
exports.generateTypes = void 0;
var graphql = require('graphql');
var load_1 = require('@graphql-tools/load');
var graphql_file_loader_1 = require('@graphql-tools/graphql-file-loader');
var fs = require('fs');
var getSchemaVisitor_1 = require('../getSchemaVisitor');
var generateFixtures_1 = require('../generateFixtures');
var filters_1 = require('../utils/filters');
var getTests_1 = require('../getTests');
var utils_1 = require('@graphql-tools/utils');
var getCachedDocumentNodeFromSchema = (0, utils_1.memoize1)(utils_1.getDocumentNodeFromSchema);
function getFileName(config) {
  var initialFileNameSegments = config.resolverFilePath.split('/');
  var fileName = initialFileNameSegments.pop();
  var fileNameSegments = fileName.split('.');
  var extension = fileNameSegments.pop();
  var newFileName = __spreadArray(__spreadArray([], fileNameSegments, true), ['spec', extension], false).join('.');
  var newPath = __spreadArray(__spreadArray([], initialFileNameSegments, true), [newFileName], false).join('/');
  return newPath;
}
function generateTypes(config) {
  var _a, _b, _c, _d;
  return __awaiter(this, void 0, void 0, function () {
    var schema, ast, fixtureNodes, newResolve, queryNode, mutationNode, baseNode, fixtures, result, fileName;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          return [
            4 /*yield*/,
            (0, load_1.loadSchema)(config.schemaFilePath, { loaders: [new graphql_file_loader_1.GraphQLFileLoader()] }),
          ];
        case 1:
          schema = _e.sent();
          ast = getCachedDocumentNodeFromSchema(schema);
          fixtureNodes = {};
          newResolve = (0, getSchemaVisitor_1.getNewResolve)(fixtureNodes);
          graphql.visit(ast, { leave: newResolve });
          queryNode = fixtureNodes === null || fixtureNodes === void 0 ? void 0 : fixtureNodes.Query;
          mutationNode = fixtureNodes === null || fixtureNodes === void 0 ? void 0 : fixtureNodes.Mutation;
          if (!(0, filters_1.IsObjectFixtureNodeOrUndefined)(queryNode)) {
            throw new Error('Query is not object or undefined.');
          }
          if (!(0, filters_1.IsObjectFixtureNodeOrUndefined)(mutationNode)) {
            throw new Error('Mutation is not object or undefined.');
          }
          baseNode =
            (_b =
              (_a = queryNode === null || queryNode === void 0 ? void 0 : queryNode.fields) === null || _a === void 0
                ? void 0
                : _a.find(function (field) {
                    return field.name === config.resolverName;
                  })) !== null && _b !== void 0
              ? _b
              : (_c = mutationNode === null || mutationNode === void 0 ? void 0 : mutationNode.fields) === null ||
                _c === void 0
              ? void 0
              : _c.find(function (field) {
                  return field.name === config.resolverName;
                });
          fixtures = (0, generateFixtures_1.generateFixtures)(
            baseNode,
            fixtureNodes,
            (_d = config.maxFixtures) !== null && _d !== void 0 ? _d : 100
          );
          result = (0, getTests_1.getTests)(
            (fixtures === null || fixtures === void 0 ? void 0 : fixtures.length) ? fixtures : [{}],
            config
          );
          fileName = getFileName(config);
          fs.writeFileSync(fileName, result);
          return [2 /*return*/, result];
      }
    });
  });
}
exports.generateTypes = generateTypes;
