import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class WatchlistSerivce {
firestoreCollection:AngularFirestoreCollection
  constructor(private firestore:AngularFirestore) {
    this.firestoreCollection=firestore.collection('users');
  }
    addItem(user:any){
      this.firestoreCollection.add({
        user:user
      })
    }
    deleteItem(id:string){
      this.firestoreCollection.doc(id).delete();
    }
}
