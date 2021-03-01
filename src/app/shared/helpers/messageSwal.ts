import Swal from 'sweetalert2';

export function MessageSwal(message: string,icon: boolean){
    if(icon){
      Swal.fire(message, 'Aceptar!', 'success').then(r => {});
    }else{
      Swal.fire(message, 'Aceptar!', 'warning').then(r => {});
    }
}
