import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CandidateDetail } from '../model/candidatedetail.model';

@Component({
  selector: 'viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  listCandidate: CandidateDetail[] = [];
  loginForm: FormGroup;
  searchText = '';
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getInitialDetail();
    this.pushChange();
  }

  getInitialDetail() {
    //this.listCandidate = ;
    let person1 = new CandidateDetail();
    person1.id = 1;
    person1.first_name = 'Jeanette';
    person1.last_name = 'Penddreth';
    person1.gender = 'Male';
    person1.email = 'abc@gmail.com';
    this.listCandidate.push(person1);
    let person2 = new CandidateDetail();
    person2.id = 2;
    person2.first_name = 'Giavani';
    person2.last_name = 'Frediani';
    person2.gender = 'Male';
    person2.email = 'gfrediani1@senate.gov';
    this.listCandidate.push(person2);
  }

  addUser() {
    console.log(this.f.id);
  }

  get f() {
    return this.loginForm.controls;
  }

  pushChange() {
    this.changeDetectRef.detectChanges();
  }
}
