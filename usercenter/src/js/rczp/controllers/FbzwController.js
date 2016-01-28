import {
  jobCategory,
  salary,
  exprience,
  education,
  getTrade
} from '../../data/data.js';

export default function FbzwController($http) {
  this.jobCategory = jobCategory;
  this.salary = salary;
  this.exprience = exprience;
  this.education = education;

  getTrade($http, (res) => 
    this.trade = res.result
  );
}
