const View = {
  render() {
    const timerView = document.querySelector(".timer");

    timerView.innerHTML = ` 
      <p>Countdown</p>
      <span>10:00</span>
    `
  }
};

export { View };