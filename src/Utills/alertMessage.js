import React from 'react';
import Swal from 'sweetalert2';

export const alertMessage = (content) => {
    return (
        Swal.fire({
            position: "center",
            icon: "success",
            title: content,
            showConfirmButton: false,
            timer: 1500
          })
        )
};
