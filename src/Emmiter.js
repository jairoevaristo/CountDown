const Emmiter = {
  events: {},

  on(event, cb) {
    Emmiter.events[event] = Emmiter.events[event] || [];
    Emmiter.events[event].push(cb);
  },

  emmit(event, ...rest) {
    if (event in Emmiter.events === false) {
      return;
    }

    Emmiter.events[event].forEach(element => {
      element(...rest)
    });
  }
};

export { Emmiter };