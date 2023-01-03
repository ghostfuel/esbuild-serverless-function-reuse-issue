import type { AWS } from '@serverless/typescript';

import * as serviceAFunctions from '@service/service-a/functions';
import * as functions from './functions';

const serverlessConfiguration: AWS = {
  service: 'service-b',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions: { ...serviceAFunctions, ...functions },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
      keepOutputDirectory: true
    },
    'serverless-offline': {
      httpPort: 3002,
      lambdaPort: 4002,
    }
  },
};

module.exports = serverlessConfiguration;
