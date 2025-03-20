import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  urlImagem: String = "https://s2-g1.glbimg.com/SG0W62aEil5vYNi1oRh0LLZZKEM=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/s/i/DWyBUHQg6dN3uGt6xfAw/whatsapp-image-2020-05-26-at-20.14.26-1-.jpeg";



}
