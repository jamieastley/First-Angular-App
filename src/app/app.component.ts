import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

import { HomePage } from '../pages/home/home';
import { Category } from '../app/category';
import { LoginPage } from '../pages/login/login';
import { RegisterDisplayNamePage } from '../pages/register-display-name/register-display-name';
// import { RegisterPage } from '../pages/register/register';

import { AngularFireAuth } from 'angularfire2/auth';


const CATEGORIES: Category[] = [
	{ icon: 'bulb', name: 'Inspiration' },
	{ icon: 'book', name: 'Personal' },
	{ icon: 'school', name: 'School' },
	{ icon: 'cart', name: 'Shopping' },
	{ icon: 'done-all', name: 'To-do' },
	{ icon: 'help', name: 'Other' }
]

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	categories = CATEGORIES;

	public items = [];

	selectedCategory;
	displayName;

	rootPage:any; //= LoginPage;
	  

	constructor(
		platform: Platform, 
		statusBar: StatusBar, 
		splashScreen: SplashScreen, 
		public dataService: DataProvider,
		private afAuth: AngularFireAuth) {
			
			this.afAuth.authState.subscribe(auth => {
				if(!auth){
					this.rootPage = LoginPage;
				}
				else if(!this.afAuth.auth.currentUser.displayName){
					console.log
					this.rootPage = RegisterDisplayNamePage;
				}
				else{
					this.rootPage = HomePage;
				}
			});

			//track displayName
		this.afAuth.authState.subscribe(user => {
			if (!user.displayName) {
				this.displayName = null;
				return;
			}
			else{
				this.displayName = user.displayName;
				this.rootPage = HomePage;
				return;
			}
		})
		
			platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
  	}

	categorySelected(category) {
		for(var i = 0; i < this.items.length; i++) {
			var obj = this.items[i];
			// console.log(this.items + 'items');
			if([category.name].indexOf(obj.category) !== -1) {
				this.items.splice(i, 1);
				// i--; ?
				console.log(this.items);
			}
		}
			
	}

	onSelect(category: Category): void {
		this.selectedCategory = category;
		console.log('selected: ' + this.selectedCategory.name);
		for(var i = 0; i < this.items.length; i++) {
			var obj = this.items[i];
			console.log(this.selectedCategory.name + 'items2');
				if([this.selectedCategory.name].indexOf(obj.category) !== -1) {
					this.items.splice(i, 1);
					// i--; ?
					console.log(this.items);
				}
			}
	}
}

