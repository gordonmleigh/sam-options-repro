import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
