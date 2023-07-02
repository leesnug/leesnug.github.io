/* 作者：刷题刷到手抽筋
链接：https://www.zhihu.com/question/51798750/answer/2396493957
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
class View2 {
  constructor(presenter) {
    this.presenter = presenter;
  }
  // view不需要关注model的数据结构，只关注自己需要的数据
  // 这样也不会存在view使用了model的其他数据的情况
  render({isOpen}) {
    const button = document.createElement('button');
    button.innerText = isOpen ? "MVP：关" : "MVP：开";
    button.onclick = this.presenter.switch;
    const root = document.getElementById('root2');
    root.innerHTML = '';
    root.appendChild(button);
    return button;
  }
};

// model不需要在数据更新时候触发视图更新，只负责数据存储
class Model2 {
  state = {
    isOpen: false
  };
  
  getState() {
    return this.state;
  }
  
  switch() {
    this.state.isOpen = !this.state.isOpen;
  }
};

// persenter需要知道m和v的结构，并且要在数据改变时候更新视图，还要处理所有的交互逻辑
class Presenter {
  constructor() {
    this._view = new View2(this);
    this._model = new Model2();
    
    const {isOpen} = this._model.getState();
    this._view.render({isOpen});
  }
  switch = () => {
    this._model.switch();
    const {isOpen} = this._model.getState();
    this._view.render({isOpen});
    console.log('switch!!!');
  };
}

const presenter = new Presenter();