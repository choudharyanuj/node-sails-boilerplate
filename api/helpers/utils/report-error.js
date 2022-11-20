module.exports = {

  friendlyName: 'Report error',

  description: '',

  inputs: {
    error: {
      type: 'ref',
      required: true,
    },
    req: {
      type: 'ref',
      defaultsTo: {},
    },

  },

  exits: {

    success: {
      description: 'All done.',
    },

  },

  async fn(inputs, exits) {
    let responseError = inputs.error;
    if (!inputs.req.me)inputs.req.me = {};

    const additionalContext = {
      data: inputs.req.body || {},
      query: inputs.req.query,
      headers: inputs.req.headers,
    };

    const additionalContextStringified = {
      data: JSON.stringify(inputs.req.body || {}),
      query: JSON.stringify(inputs.req.query),
      headers: JSON.stringify(inputs.req.headers),
    };
    if (typeof (responseError) === 'string') {
      responseError = new Error(responseError);
    }
    sails.log.error(responseError)
    // log.error([responseError, additionalContextStringified], inputs.req);
    // If no data was provided, use res.sendStatus().
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      Sentry.captureException(responseError, {
        contexts: additionalContext,
        // tags: { requestId: inputs.req.id }, // Can add tags, which are key value pairs and they are searchable.
        // user: { id: inputs.req.me.id || '' },
        // extra: { callTraceLog: responseError.manualErrorLog },
      });
    }

    return exits.success();
  },

};
