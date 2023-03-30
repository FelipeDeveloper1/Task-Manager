class NewTask {
    constructor(modal, novaTask, closeModal, infoModal, closeInfoModal) {
        this.modal = document.querySelector(modal)
        this.novaTask = document.querySelector(novaTask)
        this.infoModal = document.querySelector(infoModal)
        this.closeModal = document.querySelector(closeModal)
        this.closeInfoModal = document.querySelector(closeInfoModal)

    }
    bringModal = () => {
        this.novaTask.addEventListener('click', () => {
            this.modal.classList.add('active')
            this.infoModal.classList.remove('active')
        })
    }
    hideModal = () => {
        this.closeModal.addEventListener('click', () => {
            this.modal.classList.remove('active')
        })
        this.closeInfoModal.addEventListener('click', () => {
            this.infoModal.classList.remove('active')

        })

    }
    start = () => {
        if (this.modal) {
            this.bringModal()
            this.hideModal()
        }
    }
}
const AddNewTask = new NewTask('.modal', '.new', '.close', ".infoModal", ".closeInfoModal")
AddNewTask.start()