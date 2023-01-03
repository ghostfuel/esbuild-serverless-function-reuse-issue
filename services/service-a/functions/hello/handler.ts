import { formatJSONResponse } from '@helpers/api-gateway';

export const main = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};
