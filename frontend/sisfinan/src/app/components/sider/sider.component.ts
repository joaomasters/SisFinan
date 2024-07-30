import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzIconModule, RouterModule],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.scss'
})
export class SiderComponent {

}
