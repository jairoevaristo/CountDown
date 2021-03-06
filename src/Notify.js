const Notify = {
  async init() {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted' ) {
      throw new Error("Not Permission");
    }
  },

  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon,
    })
  }
}

export { Notify };