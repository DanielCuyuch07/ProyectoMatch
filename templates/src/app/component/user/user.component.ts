import { Component, OnInit } from '@angular/core';
declare var bootstrap: any; // Declarar Bootstrap para que Angular lo reconozca

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }


  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }



  openPDFModal() {
    // Ruta del PDF que deseas mostrar en el modal
    const pdfUrl = 'ruta_del_pdf.pdf'; // Reemplaza con la ruta correcta del PDF

    // Obtén el iframe del modal
    const pdfIframe = document.getElementById('pdfIframe') as HTMLIFrameElement;

    // Establece la fuente del iframe para cargar el PDF
    pdfIframe.src = pdfUrl;

    // Abre el modal
    const pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
    pdfModal.show();
  }

}
