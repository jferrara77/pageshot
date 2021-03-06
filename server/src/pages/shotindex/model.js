exports.createModel = function (req) {
  let serverModel = {
    title: "My Shots",
    defaultSearch: req.query.q || null
  };
  serverModel.shots = req.shots;
  let jsonModel = Object.assign(
    {},
    serverModel,
    {shots: req.shots.map((shot) => ({id: shot.id, json: shot.asRecallJson()}))}
  );
  return Promise.resolve({serverModel, jsonModel});
};
