import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'moralis-address',
  template: ` <pre>{{ address }}</pre> `,
  styles: [],
})
export class AddressComponent implements OnInit {
  @Input() address = '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819';
  constructor() {}

  ngOnInit(): void {}
}
