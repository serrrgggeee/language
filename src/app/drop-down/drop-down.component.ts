import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
	@ViewChild('searchField') searchField: ElementRef;
	@Input() automation: any;
	@Input() monitor: any;
	automation_inside:any = [];
	monitor_chunks:any = [];
	monitor_inside:any = [];
	opened:boolean = false;
	close_by_blur:boolean = false;
	selected_val:string = "";
	current_monitor_slice:number = 5;
	monitor_more:boolean = true;
	userSearchUpdate = new Subject<string>();
	search_field:string = "";

	constructor() { 
		this.userSearchUpdate.pipe(
		debounceTime(1200),
		distinctUntilChanged())
		.subscribe(value => {
			this.onSearch(value);
		});
	}
	ngOnInit() {
		this.automation_inside = this.automation;
		this.monitor_inside = this.monitor;
	}
	clearSerachField(){
		this.search_field = "";
		this.onSearch(this.search_field);
	}
	setSearchFocus(){
		this.opened = !this.opened;
		setTimeout(()=>{
			this.searchField.nativeElement.focus();	
		},0);
	}
	checkLanguage(language) {
		this.selected_val = language;
	}
	onSearch(val){
		this.automation_inside = this.automation.filter(word => word.name.includes(val));
		this.monitor_inside = this.monitor.filter(word => word.name.includes(val));
		if(this.monitor_inside.length > 5){
			this.monitor_more = true;
		}
	}
	trackByLanguegeID(language: any): string {
		return language.name;
	}
	getMoreMonitor(){
		this.current_monitor_slice += 5;
	}
	getMonitor(){
		let before_length = this.monitor_inside.length;
		let monitor_inside = this.monitor_inside.slice(0,this.current_monitor_slice);
		if(before_length == monitor_inside.length) {
			this.monitor_more = false;
		}
		return monitor_inside;
	}
}

