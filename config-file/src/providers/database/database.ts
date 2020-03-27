import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*
  Generated class for the DatabaseProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(
    public http: HttpClient,
    public storage: SQLite
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS favorate (id INTEGER PRIMARY KEY , tvtitle TEXT, tvmedia TEXT, tvname TEXT,tvlogo TEXT,tvgroup TEXT)", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  Createfavorate(id: Number, tvtitle:String, tvmedia:String, tvname: String , tvlogo : String,tvgroup:String){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO favorate (id, tvtitle, tvmedia,tvname,tvlogo,tvgroup) VALUES (?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [id, tvtitle, tvmedia,tvname,tvlogo,tvgroup]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  GetAllfavorates(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM favorate", []).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              tvtitle: data.rows.item(i).tvtitle,
              tvmedia: data.rows.item(i).tvmedia,
              tvname: data.rows.item(i).tvname,
              tvlogo: data.rows.item(i).tvlogo,
              tvgroup: data.rows.item(i).tvgroup
            });            
          }          
        }
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      })
    })
  }

  Deletefavorate(favorates: any){

      let sql = 'DELETE FROM favorate WHERE id=?';
      return this.db.executeSql(sql, [favorates.id]);
   
  }

}
