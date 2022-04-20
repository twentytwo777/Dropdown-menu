class dropDown {
    constructor() {
        this.Title = document.querySelector('.main__dd');
        this.DropDown = document.querySelector('.dd_ml');
        this.DropDown_Icon = document.querySelector('.dd');

        this.init();
    };

    init() {
        this.Title.onclick = this.open.bind(this);
    };

    open() {        
        [this.DropDown, this.DropDown_Icon].map(el => el.classList.toggle('active'));
    };
};

export default dropDown;