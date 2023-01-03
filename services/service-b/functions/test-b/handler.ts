import { formatJSONResponse } from '@helpers/api-gateway';

export const main = async (event) => {
  return formatJSONResponse({
    message: `Testing the B lambda function`,
    event,
  });
};
