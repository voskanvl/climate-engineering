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

export const SearchPanel = {
    searchPanelShow: "searchpanelshow",
    searchPanelHide: "searchpanelhide",
}

export const FilterCatalog = {
    filterOpen: "filteropen",
    filterClose: "filterclose",
}

const dispatch = (event: string, options?: { detail: unknown }) =>
    document.dispatchEvent(new CustomEvent(event, options))

export const Actions = {
    letModalShow() {
        dispatch(ModalEvents.modalShow)
    },
    letModalClose() {
        dispatch(ModalEvents.modalClose)
    },
    sendModalMessage(message: string) {
        dispatch(ModalEvents.modalMessage, { detail: { message } })
    },
    showSearchPanel() {
        dispatch(SearchPanel.searchPanelShow)
    },
    hideSearchPanel() {
        dispatch(SearchPanel.searchPanelHide)
    },
    mobileMenuShow() {
        dispatch(MobileMenuEvents.mobileMenuOpen)
    },
    mobileMenuHide() {
        dispatch(MobileMenuEvents.mobileMenuClose)
    },
    filterOpen() {
        dispatch(FilterCatalog.filterOpen)
    },
    filterClose() {
        dispatch(FilterCatalog.filterClose)
    },
}
