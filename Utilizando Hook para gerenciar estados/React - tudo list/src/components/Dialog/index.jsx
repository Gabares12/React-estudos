import React from "react"

// funções em react começam COM LETRA MAIUSCULA
export function Dialog() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    const openDialog () => {
        dialog.showModal();
    };

    // "Close" button closes the dialog
    () => {
        dialog.close();
    };
    return (

        <>
            <dialog>
                <button autofocus>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button>Show the dialog</button>
        </>
    )
}