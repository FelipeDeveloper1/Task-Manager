class InsertTask {
    constructor(set, role, addSubTask, modal) {
        this.infoRequired = ['title', 'description']
        this.set = document.querySelector(set)
        this.role = document.querySelector(role)
        this.addSubTask = document.querySelector(addSubTask)
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

        // criando os elemenetos
        const newSub = document.createElement("input")
        const subTaskLocale = document.querySelector(".subtasks")
        const subTaskPlace = document.createElement("div")
        const deleteSub = document.createElement("p")

        // setando seus atributos
        newSub.classList.add("default", "subtask")
        newSub.type = "text"
        subTaskPlace.classList.add("sub_place")
        deleteSub.classList.add("deleta_sub")
        deleteSub.innerText = "X"

        // adicionando nos seus respectivos lugares
        subTaskPlace.insertAdjacentElement("beforeend", newSub)
        subTaskPlace.insertAdjacentElement("beforeend", deleteSub)
        subTaskLocale.insertAdjacentElement("beforeend", subTaskPlace)
    }
    CreateInsertNote = (local) => {
        const note = document.createElement('div')
        note.classList = "note"
        local.insertAdjacentElement("beforeend", note)
        this.SetInNote(note)
    }
    SetInNote = (note) => {
        // adicionando o titulo na nota
        let NoteTitle = document.createElement('p')
        NoteTitle.textContent = document.querySelector("#title").value
        note.insertAdjacentElement("beforeend", NoteTitle)

        // adicionando a quantidade de subtask na nota
        let NoteSubTask = document.createElement('p')
        let SubtaskCount = document.querySelectorAll(".subtask").length
        NoteSubTask.textContent = `0 de ${SubtaskCount} subtask`
        note.insertAdjacentElement("beforeend", NoteSubTask)
    }


    start = () => {
        this.click()
    }

}
const set = new InsertTask('.newTask', '.role', '.newSubTask', '.modal')
set.start()