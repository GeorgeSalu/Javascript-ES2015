const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyDLi3l4T2jM21v1lzB7TnSixPQg-JibP4w",
            authDomain: "whatsapp-clone-12be9.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-12be9.firebaseio.com",
            projectId: "whatsapp-clone-12be9",
            storageBucket: "whatsapp-clone-12be9.appspot.com",
            messagingSenderId: "665851149373"
        }

        this.init();
    }

    init() {

        if(!this._initialized) {
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            this._initialized = true;
        }

    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

}