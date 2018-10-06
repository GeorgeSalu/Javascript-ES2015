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
           this.updloadTask(event.target.files);
           this.snackModalEL.style.display = 'block';

        })
    }

    updloadTask(files) {

        let promises = [];

        [...files].forEach(file => {
            promises.push(new Promise((resolve, reject) => {
                let ajax = new XMLHttpRequest();
                ajax.open('POST', '/upload');

                ajax.onload = event => {

                    try {
                        resolve(JSON.parse(ajax.responseText));
                    } catch (e) {
                        reject(e);
                    }

                };

                ajax.onerror = event => {
                    reject(event);
                };

                let formData = new FormData();

                formData.append('input-file', file);

                ajax.send(formData);

            }));
        });

        return Promise.all(promises);

    }

}