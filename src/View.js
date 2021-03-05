const View = {
  render({ minutes, seconds }) {
    const timerView = document.getElementById("timer");

    timerView.innerHTML = ` 
      <p>Countdown</p>
      <span>${minutes}:${seconds}</span>
    `;
  },

};

export { View };