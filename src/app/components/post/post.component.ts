import {Component, input, signal, viewChild} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {Post} from '../../shared/models/post.model';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'zaj-post',
  imports: [
    DialogComponent,
    TranslatePipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  readonly post = input.required<Post>();
  private readonly dialog = viewChild.required<DialogComponent>(DialogComponent);

  protected readonly textWidth = signal(0);

  protected openDialog() {
    this.dialog().open();
  }

  updateMaxTextWidth(imgRef: HTMLImageElement) {
    this.textWidth.set(imgRef.clientWidth);
  }
}
