import { View } from './View.js'
import { Notify } from './Notify.js'

const Timer = {
  time: 0.1 * 60,
  currentTime: 0,
  timeInterval: null,

  timeToMinutes: time => Math.floor(time / 60), 
  timeToSeconds: time => Math.floor(time % 60), 

  formatTimer: time => String(time).padStart(2, '0'), 

  init(time) {
    Timer.currentTime = time || Timer.time;
    Timer.timeInterval = setInterval(Timer.countdown, 1000);
  },

  async countdown() {
    Timer.currentTime = Timer.currentTime - 1;

    const minutes = Timer.formatTimer(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTimer(Timer.timeToSeconds(Timer.currentTime));

    if (Timer.currentTime === 0) {
      clearInterval(Timer.timeInterval);
      Notify.notify({
        title: "Chegou a hora de ler a biblia",
        body: "Leia a biblia para alimentar o espirito, Mt 09:22",
        icon: "/assets/notification.png"
      });
    }

    View.render({ minutes, seconds });
  },

};

export { Timer };