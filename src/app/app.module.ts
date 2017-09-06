import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyPopOverPage } from '../pages/my-pop-over/my-pop-over';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyCp0xH3jphTGHAWVCnO9N9YDlMT4eS52RU",
    authDomain: "crossappstasker.firebaseapp.com",
    databaseURL: "https://crossappstasker.firebaseio.com",
    projectId: "crossappstasker",
    storageBucket: "crossappstasker.appspot.com",
    messagingSenderId: "674430010447"
};

 
@NgModule({
  declarations: [
    MyApp,
	HomePage,
	AddItemPage,
	ItemDetailPage, 
	MyPopOverPage,
	LoginPage,
	RegisterPage
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule,
	AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage,
	AddItemPage,
	ItemDetailPage,
	MyPopOverPage,
	LoginPage,
	RegisterPage
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
