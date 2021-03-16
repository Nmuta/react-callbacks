class ViewTracker {
    constructor(name) {
      this.name = name;
      this.views = [];
    }
  
    trackView = async () => {
      const show = {
        ...(await getShow(this.name)),
        currentDate: new Date().toString(),
      };
      this.views.push(show);
    };
  
    summary = () => {
      return this.views.map((currShow) => {
        return `${currShow.name} (${currShow.id}) ${currShow.currentDate}`;
      });
    };
  }