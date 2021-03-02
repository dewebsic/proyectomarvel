import Swal from 'sweetalert2';

export function MessageSwal(message: string,icon: boolean){
    if(icon){
      Swal.fire(message, 'You clicked the button!','success').then(r => {});
    }else{
      Swal.fire(message, 'You clicked the button!','warning').then(r => {});
    }
}
