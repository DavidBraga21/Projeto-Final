import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Configurações', url: '/folder/pagina-principal', icon: 'cog' },
   
 
  ];
  public labels = [];
  constructor(private actionSheetController: ActionSheetController) {}

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmação de Log Out',
      buttons: [
        {
          text: 'Sair',
          role: 'destructive',
          icon: 'log-out',
          handler: () => {
            // Lógica para realizar o log out
            console.log('Log Out realizado!');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            // Ação ao cancelar a ação
            console.log('Cancelado');
          }
        }
      ]
    });

    await actionSheet.present();
  }
}