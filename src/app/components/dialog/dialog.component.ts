import {Component, inject, input, OnDestroy, TemplateRef, viewChild, ViewChild, ViewContainerRef} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {take} from 'rxjs';

@Component({
  selector: 'zaj-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnDestroy {
  readonly title = input('');
  readonly header = input(true);
  readonly footer = input(true);
  readonly closable = input(true);
  readonly backdrop = input(true);

  private overlay = inject(Overlay);
  private vcr = inject(ViewContainerRef);

  dialogTemplate = viewChild.required<TemplateRef<any>>('dialogTemplate');

  private overlayRef!: OverlayRef;

  open() {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.overlayRef = this.overlay.create({
      hasBackdrop: this.backdrop(),
      positionStrategy,
      backdropClass: 'dialog-backdrop'
    });

    this.overlayRef.backdropClick()
      .pipe(take(1))
      .subscribe(() => {
        if (this.closable()) this.close();
      });

    const portal = new TemplatePortal(this.dialogTemplate(), this.vcr);
    this.overlayRef.attach(portal);
  }

  close() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

  ngOnDestroy() {
    this.close();
  }
}
