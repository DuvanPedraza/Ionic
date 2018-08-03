import { Injectable } from '@angular/Core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier ="token";

@Injectable()
export class Authentication {

    public token: string; 
    constructor
        (private angularFire: AngularFireAuth) { 
            this.setUp();
        }

        setUp(){
            this.angularFire.authState.subscribe((firebaseUser)=>
        {
            if(firebase){
                localStorage.setItem(identifier, firebaseUser.uid);
                this.token=firebaseUser.uid;
                console.log(this.token);
            }else{
                localStorage.removeItem(identifier);
                this.token=null;
            }
        });
        }
    getTokenFronLS():string{
        return localStorage.getItem(identifier);
    }


    logOut(){
        return this.angularFire.auth.signOut().then(( )=>{
            this.token=null;
        }
    );
    }


    createUserWithEmailAndPassword(email, password) {
        this.angularFire.auth.createUserWithEmailAndPassword(email, password);
    }

    crearUsuarioGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.angularFire.auth.signInWithRedirect(provider)
        .then(
            result =>{
                return firebase.auth().getRedirectResult;
            }
        )
    }

    crearUsuarioFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.angularFire.auth.signInWithRedirect(provider)
        .then(
            result =>{
                return firebase.auth().getRedirectResult;
            }
        )
    }
}