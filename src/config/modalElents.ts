export const ModalEvents = {
    modalShow: "modalshow",
    modalClose: "modalclose",
    modalShowed: "modalshowed",
    modalClosed: "modalclosed",
    modalMessage: "modalmessage",
}

export const MobileMenuEvents = {
    mobileMenuOpen: "mobilemenuopen",
    mobileMenuClose: "mobilemenuclose",
}

export const Actions = {
    letModalShow() {
        document.dispatchEvent(new CustomEvent(ModalEvents.modalShow))
    },
    letModalClose() {
        document.dispatchEvent(new CustomEvent(ModalEvents.modalClose))
    },
    sendModalMessage(message: string) {
        document.dispatchEvent(new CustomEvent(ModalEvents.modalMessage, { detail: { message } }))
    },
}
