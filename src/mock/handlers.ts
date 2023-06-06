import { rest } from 'msw';
import data from '@/constants/data.json'

export const handlers = [
  rest.get('/location', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data),
    );
  }),
];
