import { Component, OnInit } from '@angular/core';
import { Foo } from 'src/app/models/foo';
import { FooService } from 'src/app/services/foo.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  foos: Foo[] = [];
  isAdmin: boolean = false;

  constructor(private fooService: FooService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadFoos()
    this.isAdmin = this.loginService.getIsAdmin();
    
  }

  loadFoos(){
    this.fooService.list().subscribe(res => {
      this.foos = res;
    },
    err => console.log(err.message))
  }

  onDelete(id: any){
    this.fooService.delete(id).subscribe(
      data => {
        console.log(data);
        this.loadFoos()
      },
      err => console.log(err)
    );
  }
}
