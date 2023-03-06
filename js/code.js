class NewTask {
    constructor(modal, novaTask, closeModal) {
        this.modal = document.querySelector(modal)
        this.novaTask = document.querySelector(novaTask)
        this.closeModal = document.querySelector(closeModal)
    }
    bringModal = () => {
        this.novaTask.addEventListener('click', () => {
            this.modal.classList.add('active')
        })
    }
    hideModal = () => {
        this.closeModal.addEventListener('click', () => {
            this.modal.classList.remove('active')
        })
    }
    start = () => {
        if (this.modal) {
            this.bringModal()
            this.hideModal()
        }
    }
}
const AddNewTask = new NewTask('.modal', '.new', '.close')
AddNewTask.start()