class View {
  constructor(controller) {
    this.controller = controller;
  }
  render(model) {
    const button = document.createElement("button");
    const isOpen = model.getState().isOpen;
    button.innerText = isOpen ? "MVC：open" : "MVC：close";
    button.onclick = this.controller.switch;
    const root = document.getElementById("root1");
    root.innerHTML = "";
    root.appendChild(button);
    return button;
  };
}
// model需要在数据更新时候触发视图更新
class Model {
  constructor(){
    this.state = {
      isOpen: true,
    };

    this._views = [];
  }
  
  getState() {
    return this.state;
  }

  register(view) {
    this._views.push(view);
    
  }

  switch() {
    this._update({
      isOpen: !this.state.isOpen,
    });
  }

  _update(data) {
    this.state = data;
    //Object.assign(this.state, data);
    this._notify();
  }

  _notify() {
    this._views.forEach((view)=> {
      view.render(this);
      console.log("a:", this); 
    });
  }
  
}

class Controller {
  constructor() {
    this._view = new View(this);
    this._model = new Model();
    this._model.register(this._view);
    this._view.render(this._model);
  }
  switch = () => {
    this._model.switch();
    console.log("b:", this._model); 
    console.log("switch!!!",this);
  };
}

const controller = new Controller();

