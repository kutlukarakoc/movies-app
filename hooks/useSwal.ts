import { XMarkIcon } from '@heroicons/react/24/outline'
import Swal, { SweetAlertIcon } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const useSwal = () => {

   const MySwal = withReactContent(Swal)

   const showSwal = (content: JSX.Element, icon?: SweetAlertIcon, time?: number) => {
      return MySwal.fire({
         icon: icon,
         html: content,
         showConfirmButton: false,
         showCloseButton: true,
         timer: time !== undefined ? time : undefined,
         timerProgressBar: time ? true : false,
         customClass: {
            popup: 'bg-primary',
            closeButton: 'swal-close-button'
         }
      })
   }

   const closeSwal = () => {
      MySwal.close()
   }

   return { showSwal, closeSwal }
}