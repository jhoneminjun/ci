"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var openapi_parser_1 = __importDefault(require("@readme/openapi-parser"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var swagger2openapi_1 = __importDefault(require("swagger2openapi"));
var utils = __importStar(require("./lib/utils"));
var OASNormalize = /** @class */ (function () {
    function OASNormalize(file, opts) {
        this.file = file;
        this.opts = __assign({ colorizeErrors: false, enablePaths: false }, opts);
        this.type = utils.getType(this.file);
        this.cache = {
            load: false,
            bundle: false,
            deref: false
        };
    }
    // Internal API for the most part
    OASNormalize.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resolve, _a, resp, contents;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.cache.load)
                            return [2 /*return*/, Promise.resolve(this.cache.load)];
                        resolve = function (obj) {
                            var ret = utils.stringToJSON(obj);
                            _this.cache.load = ret;
                            return Promise.resolve(ret);
                        };
                        _a = this.type;
                        switch (_a) {
                            case 'json': return [3 /*break*/, 1];
                            case 'string-json': return [3 /*break*/, 1];
                            case 'string-yaml': return [3 /*break*/, 1];
                            case 'buffer': return [3 /*break*/, 2];
                            case 'url': return [3 /*break*/, 3];
                            case 'path': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1: return [2 /*return*/, resolve(this.file)];
                    case 2: return [2 /*return*/, resolve(this.file.toString())];
                    case 3: return [4 /*yield*/, (0, node_fetch_1["default"])(this.file).then(function (res) { return res.text(); })];
                    case 4:
                        resp = _b.sent();
                        return [2 /*return*/, resolve(resp)];
                    case 5:
                        // Load a local file
                        if (!this.opts.enablePaths) {
                            return [2 /*return*/, Promise.reject(new Error('Use `opts.enablePaths` to enable accessing local files.'))];
                        }
                        contents = fs_1["default"].readFileSync(this.file).toString();
                        return [2 /*return*/, resolve(contents)];
                    case 6: return [2 /*return*/, Promise.reject(new Error('Could not load this file.'))];
                }
            });
        });
    };
    /**
     * Bundle up the given OpenAPI or Swagger definition, resolving any external `$ref` pointers in
     * the process.
     *
     */
    OASNormalize.prototype.bundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.cache.bundle)
                    return [2 /*return*/, Promise.resolve(this.cache.bundle)];
                return [2 /*return*/, this.load()
                        .then(function (schema) { return openapi_parser_1["default"].bundle(schema); })
                        .then(function (bundle) {
                        _this.cache.bundle = bundle;
                        return bundle;
                    })];
            });
        });
    };
    /**
     * Dereference the given OpenAPI or Swagger.
     *
     */
    OASNormalize.prototype.deref = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.cache.deref)
                    return [2 /*return*/, Promise.resolve(this.cache.deref)];
                return [2 /*return*/, this.load()
                        .then(function (schema) { return openapi_parser_1["default"].dereference(schema); })
                        .then(function (dereferenced) {
                        _this.cache.deref = dereferenced;
                        return dereferenced;
                    })];
            });
        });
    };
    /**
     * Validate a given OpenAPI or Swagger definition, potentially upconverting it from Swagger to
     * OpenAPI in the process if you wish.
     *
     */
    OASNormalize.prototype.validate = function (convertToLatest) {
        if (convertToLatest === void 0) { convertToLatest = false; }
        return __awaiter(this, void 0, void 0, function () {
            var colorizeErrors;
            var _this = this;
            return __generator(this, function (_a) {
                colorizeErrors = this.opts.colorizeErrors;
                return [2 /*return*/, this.load().then(function (schema) { return __awaiter(_this, void 0, void 0, function () {
                        var baseVersion, clonedSchema;
                        return __generator(this, function (_a) {
                            baseVersion = parseInt(utils.version(schema), 10);
                            if (baseVersion === 1) {
                                return [2 /*return*/, Promise.reject(new Error('Swagger v1.2 is unsupported.'))];
                            }
                            else if (baseVersion === 2 || baseVersion === 3) {
                                clonedSchema = JSON.parse(JSON.stringify(schema));
                                return [2 /*return*/, openapi_parser_1["default"]
                                        .validate(clonedSchema, {
                                        validate: {
                                            colorizeErrors: colorizeErrors
                                        }
                                    })
                                        .then(function () {
                                        if (!convertToLatest) {
                                            return schema;
                                        }
                                        return swagger2openapi_1["default"].convertObj(schema, { anchors: true }).then(function (options) {
                                            return options.openapi;
                                        });
                                    })["catch"](function (err) { return Promise.reject(err); })];
                            }
                            return [2 /*return*/, Promise.reject(new Error('The supplied API definition is unsupported.'))];
                        });
                    }); })];
            });
        });
    };
    /**
     * Retrieve the OpenAPI or Swagger version of the current API definition.
     *
     */
    OASNormalize.prototype.version = function () {
        return this.load().then(function (schema) { return utils.version(schema); });
    };
    return OASNormalize;
}());
exports["default"] = OASNormalize;
