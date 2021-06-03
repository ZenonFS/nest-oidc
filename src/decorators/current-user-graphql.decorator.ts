import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// @ts-ignore
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUserGraphQL = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
