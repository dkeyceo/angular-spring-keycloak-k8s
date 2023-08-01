import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foo } from 'src/app/models/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  foo: Foo = new Foo();

  constructor(private fooService: FooService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.fooService.detail(id).subscribe(
      data => {
        this.foo = data;
      },
      err => console.log(err)
    );
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.fooService.update(id, this.foo).subscribe(
      data => {
        console.log(data);
        this.backToList()
      },
      err => console.log(err)
    )
  }
  backToList(){
    this.router.navigate(['/list']);
  }



}
