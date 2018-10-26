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

        if(!window._initializedFirebase) {
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }

    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {

        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                            .then(result => {
                                let token = result.credential.accessToken;
                                let user = result.user;

                                s(user, token);
                            })
                            .catch(err => {
                                f(err);
                            })

        });

    }

}