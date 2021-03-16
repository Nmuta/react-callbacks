  class ViewTracker {

    views = [];
    constructor(name){
        this.name = name;

    }

    trackView = async () =>{
       const object = await getShow(this.name);
       const newObject = {...object, showDate : new Date()};
        this.views = [...this.views, newObject];
    } 
  
    summary = () =>{
        let newViews= this.views.map((show) => `${show.name} (${show.id}) ${show.showDate}`);
        return newViews;

    }
  
  }