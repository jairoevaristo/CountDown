import Notify from './Notify.js';
import { Timer } from './Timer.js';
import { View } from './View.js';

const App = {
  async start() {
    try {
      Timer.init(26 * 60);
      // await Notify.init();
      // Notify.notify({
      //   title: "Chegou a hora de ler a biblia",
      //   body: "Leia a biblia para alimentar o espirito, Mt 09:22"
      // });

    } catch (err) {
      console.log(err.message);
    }

  }
};

export { App };