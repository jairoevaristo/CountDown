import { Timer } from './Timer.js';
import { Notify } from './Notify.js';

const App = {
  async start() {
    try {
      await Notify.init();
      Timer.init(10 * 60);

    } catch (err) {
      console.log(err.message);
    }

  }
};

export { App };