class InsertTask {
    constructor(set, role, addSubTask, subtasks, modal) {
        this.infoRequired = ['title', 'description']
        this.set = document.querySelector(set)
        this.role = document.querySelector(role)
        this.addSubTask = document.querySelector(addSubTask)
        this.subtasks = document.querySelectorAll(subtasks)
        this.modal = document.querySelector(modal)
    }
    click = () => {
        this.set.addEventListener('click', () => {
            this.setRole()
            this.modal.classList.remove('active')
        })
        this.addSubTask.addEventListener('click', () => {
            this.Addsubtask()
        })

    }
    setRole = () => {
        const role = this.role.options[this.role.selectedIndex].value
        const local = document.querySelector(`.${role}`)
        this.CreateInsertNote(local)
    }
    Addsubtask = () => {
        const newSub = document.createElement("input")
        newSub.classList.add("default", "subtask")
        newSub.type = "text"
        const subTaskLocale = document.querySelector(".subtasks")
        subTaskLocale.insertAdjacentElement("beforeend", newSub)
        console.log(subTaskLocale)
    }
    CreateInsertNote = (local) => {
        const note = document.createElement('div')
        note.classList = "note"
        local.insertAdjacentElement("beforeend", note)
        this.SetInNote(note)
    }
    SetInNote = (note) => {
        let NoteTitle = document.createElement('p')
        NoteTitle.textContent = document.querySelector("#title").value
        note.insertAdjacentElement("beforeend", NoteTitle)
    }


    start = () => {
        this.click()
    }

}
const set = new InsertTask('.newTask', '.role', '.newSubTask', '.subtask', '.modal')
set.start()