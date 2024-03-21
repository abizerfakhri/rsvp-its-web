import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { EntriesService } from '../../services/entries.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.scss'
})


export class EntryFormComponent implements OnInit {
  giveError:boolean=false
  noError:boolean=false
  formFields:Object={}
  collection:Object[]=[]
  availableDates:String[]=[]
  hijri:number=0

  //response:Object={}
  

  constructor(private Entry:EntriesService){
    this.populateDates()
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    //const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const m = date.getMonth()
    const day = date.getDate().toString().padStart(2, '0');
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return `Ramadan ${this.hijri}th (${day}-${month[m]}-${year}) `;
  }

 

  populateDates() {
    const today = new Date();
    const lastDate = new Date('2024-04-08');
    const refDate = new Date ('2024-03-10')
    const differenceInMilliseconds:number = (today.getTime()-refDate.getTime())
    const diffInDays:number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
    this.hijri=diffInDays+1
    while (today <= lastDate) {
      this.availableDates.push(this.formatDate(today));
      today.setDate(today.getDate()+1);
      this.hijri++
      
    }
    
    }

    
  

  
  // downloadCSV(): void {
  // this.Entry.getCSV().subscribe((data:any) => {
  //   const blob = new Blob([data], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'users.csv';
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // })
  // }

  saveEntry(){
    this.Entry.postEntry(this.collection[0]).subscribe((result)=>{
      console.log(result);
      
    })

    console.log(this.collection[0]);
    
  }

  

  ngOnInit(){    
  }

  

  createObject(a:string,b:string,c:number,d:number,e:string):void{
     let response:Object={
      its_no:a,
      name:b,
      adults:c,
      children:d,
      date:e     
    }
    //this.collection.push(response)


    

    let newcollection=[response,...this.collection,]
    //let newcollection=[response]
    //let newcollection=[...this.collection,response]
    this.collection=newcollection
    // console.log(this.collection);
  }

  onSubmit(itsAdd:NgForm){
    console.log(itsAdd);
    this.error(itsAdd)
    console.log(this.giveError);
    let its_id=itsAdd.form.controls['itsNo'].value
    let head_name=itsAdd.form.controls['headName'].value
    let adults=itsAdd.form.controls['adults'].value
    let children=itsAdd.form.controls['children'].value
    let date=itsAdd.form.controls['date'].value
     //console.log(date);
    
    if (this.giveError==false) {
      itsAdd.resetForm()  
      this.createObject(its_id,head_name,adults,children,date)    
      this.saveEntry()
      
      
    }
    

    // console.log(itsAdd.form.controls['itsNo'].value);
    // console.log(itsAdd.form.controls['headName'].value);
    // console.log(itsAdd.form.controls['adults'].value);
    // console.log(itsAdd.form.controls['children'].value);
    // console.log(itsAdd.form.status)
    // console.log(itsAdd.form.controls['itsNo']);
    // console.log(itsAdd.form.controls['itsNo'].status);
    // console.log(itsAdd.form.controls['itsNo'].value);
    // console.log(itsAdd.form.controls['itsNo'].errors);
  }

  error(Add:any){
    if (Add.form.status=="INVALID") {
      this.giveError=true
    }
    if (Add.form.status=="VALID"){
      this.noError=true
    }
  }
}


//need to create its no duplicacy error(unique its)

