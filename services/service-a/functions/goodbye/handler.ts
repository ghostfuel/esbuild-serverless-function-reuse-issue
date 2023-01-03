import { formatJSONResponse } from '@helpers/api-gateway';

export const main = async (event) => {
  return formatJSONResponse({
    message: `Goodbye.`,
    event,
  });
};
