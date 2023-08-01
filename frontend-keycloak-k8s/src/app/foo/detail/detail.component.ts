import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foo } from 'src/app/models/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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
  backToListRoute(){
    this.router.navigate(['/list']);
  }
}
