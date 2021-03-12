const Notify = {
  sugestions: [
    '1 Timóteo 4:12',
    '1 Timóteo 5:1',
    '1 João 2:13',
    '1 João 2:14',
    '2 Timóteo 2:22',
    '1 Pedro 5:5',
    '2 Coríntios 4:16-18'
  ],

  async init() {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted' ) {
      throw new Error("Not Permission");
    }
  },

  notify() {
    const sugestionItem = Notify.sugestions[Math.floor(Math.random() * Notify.sugestions.length)];

    return () => new Notification('Sugestão do dia', {
      body: sugestionItem,
      icon: "/assets/notification.png"
    })
  }
}

export { Notify };