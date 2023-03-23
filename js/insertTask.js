class InsertTask {
    constructor(set, role, addSubTask, modal) {
        this.infoRequired = ['title', 'description']
        this.set = document.querySelector(set)
        this.role = document.querySelector(role)
        this.addSubTask = document.querySelector(addSubTask)
        this.modal = document.querySelector(modal)
        this.closeSub = []
        this.allData = []
        this.ObjectNote = {}


    }
    click = () => {
        this.set.addEventListener('click', () => {
            this.setRole()
            this.modal.classList.remove('active')
        })
        this.addSubTask.addEventListener('click', () => {
            this.Addsubtask()


            this.closeSub.forEach((value, index) => {
                value.addEventListener('click', () => {
                    this.deleteSubTask(index)
                })
            })
        })

    }

    // setar o note em sua posição no documento 

    setRole = () => {
        this.ObjectNote.role = this.role.options[this.role.selectedIndex].value
        const local = document.querySelector(`.${this.ObjectNote.role}`)
        this.CreateInsertNote(local)
    }

    // criando as subtasks

    Addsubtask = () => {
        // criando os elemenetos
        const newSub = document.createElement("input")
        const subTaskPlace = document.createElement("div")
        const deleteSub = document.createElement("p")
        const subTaskLocale = document.querySelector(".subtasks")


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

        // adicionando a contagem de exclusão 
        this.quantiSubTask = document.querySelectorAll('.sub_place')
        this.closeSub = document.querySelectorAll('.deleta_sub')

    }

    // deletnado as substasks  

    deleteSubTask = (valor) => {
        this.quantiSubTask[valor].remove()

    }

    CreateInsertNote = (local) => {
        const note = document.createElement('div')
        note.classList = "note"

        local.insertAdjacentElement("beforeend", note)
        this.SetInNote(note)
    }

    SetInNote = (note) => {
        // criando o objeto da nota 
        this.ObjectNote.title = document.querySelector("#title").value
        console.log(this.ObjectNote)

        // adicionando o titulo na nota
        let NoteTitle = document.createElement('p')
        NoteTitle.textContent = this.ObjectNote.title
        note.insertAdjacentElement("beforeend", NoteTitle)

        // criando o ID na nota/note
        let noteId = document.createElement('p')
        noteId.value = Math.random().toFixed(2)
        this.ObjectNote.id = noteId.value


        // adicionando a quantidade de subtask na nota
        let NoteSubTask = document.createElement('p')
        this.ObjectNote.subtaskCount = document.querySelectorAll(".subtask").length
        NoteSubTask.textContent = `0 de ${this.ObjectNote.subtaskCount} subtask`
        note.insertAdjacentElement("beforeend", NoteSubTask)
    }

    start = () => {
        this.click()
    }

}
const set = new InsertTask('.newTask', '.role', '.newSubTask', '.modal')
set.start()