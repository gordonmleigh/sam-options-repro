"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const agw = __importStar(require("@aws-cdk/aws-apigateway"));
const cdk = __importStar(require("@aws-cdk/core"));
const lambda = __importStar(require("@aws-cdk/aws-lambda"));
class TestStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const handler = new lambda.Function(this, 'TestFunction', {
            code: lambda.AssetCode.fromAsset(path_1.default.join(__dirname, '../lib')),
            handler: 'lambda.handler',
            runtime: lambda.Runtime.NODEJS_10_X,
        });
        const api = new agw.LambdaRestApi(this, 'TestApi', {
            handler,
            proxy: true,
        });
        new cdk.CfnOutput(this, 'ApiUrl', {
            value: api.url,
        });
    }
}
const app = new cdk.App();
new TestStack(app, 'SamOptionsRepro');
