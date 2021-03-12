import { Timer } from './Timer.js';
import { Notify } from './Notify.js';
import { Emmiter } from './Emmiter.js';

const notify = Notify.notify();

const App = {
  async start() {
    try {
      await Notify.init();

      Emmiter.on('countdown-start', notify);
      Emmiter.on('countdown-end', Timer.init)

      Timer.init();
    } catch (err) {
      console.log(err.message);
    }

  }
};

export { App };