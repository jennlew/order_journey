import { Component, OnInit } from '@angular/core';
import { NodeComponentAbstract } from 'hb-client';
import { SearchService } from '../search.service'
import { HbClientService } from 'hb-client';

@Component({
  selector: 'app-inline-search-node',
  templateUrl: './inline-search-node.component.html',
  styleUrls: ['./inline-search-node.component.scss']
})
export class InlineSearchNodeComponent extends NodeComponentAbstract implements OnInit {
  public type = 'text';
  private timer: number;
  public cwsRef: string;

  constructor(public search: SearchService, public hbClient: HbClientService) {
    super();
  }

  ngOnInit() {
  }

  resume(event: any) {
      console.log(this.cwsRef);
      this.hbClient.setRefId(this.cwsRef);
      this.hbClient.instantiateLinearFlow();
  }

  onKey(event: any) {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      function checkNotDone(state) {
          return state.businessContext.flowTraversalMap.default.createdResources.indexOf('checkout.checkout') < 0;
      }
      this.timer = setTimeout(
          (() => {
              this.cwsRef = null;
              this.search
                .search(this.node.value, checkNotDone, 1)
                .subscribe((state: any) => {
                    this.cwsRef = state['cws-ref'];
                    console.log(state);
                })
          }).bind(this),
          300
      );
  }
}
