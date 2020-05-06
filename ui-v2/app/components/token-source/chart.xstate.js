export default {
  id: 'token-source',
  initial: 'idle',
  context: {},
  on: {
    RESTART: [
      {
        target: 'secret',
        cond: 'isSecret',
      },
      {
        target: 'provider',
      },
    ],
  },
  states: {
    idle: {},
    secret: {},
    provider: {
      on: {
        SUCCESS: 'jwt',
      },
    },
    jwt: {
      on: {
        SUCCESS: 'token',
      },
    },
    token: {},
  },
};
