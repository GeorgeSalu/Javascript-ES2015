class DropBoxController {

    constructor() {
        this.btnSendFile1 = document.querySelector('#btn-send-file');
        this.inputFileEl = document.querySelector('#files');
        this.snackModalEL = document.querySelector('#react-snackbar-root');
        this.initEvents();
    }

    initEvents() {
        this.btnSendFile1.addEventListener('click', event => {
            this.inputFileEl.click();

        });

        this.inputFileEl.addEventListener('change', event => {
           console.log(event.target.files);

           this.snackModalEL.style.display = 'block';

        })
    }
}