class InsertTask {
    constructor(set, role, addSubTask, modal) {
        this.infoRequired = ['title', 'description']
        this.set = document.querySelector(set)
        this.role = document.querySelector(role)
        this.addSubTask = document.querySelector(addSubTask)
        this.modal = document.querySelector(modal)
        this.closeSub = []
        this.subtaskValue = []
        this.allData = []
        this.noteObjectPublic = {}


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
        this.noteObjectPublic.role = this.role.options[this.role.selectedIndex].value
        const local = document.querySelector(`.${this.noteObjectPublic.role}`)
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
        this.subtaskValue = document.querySelectorAll(".subtask")


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
        // criando o objeto da nota publica e inserindo o title no objeto
        this.noteObjectPublic.title = document.querySelector("#title").value
        this.noteObjectPublic.description = document.querySelector("#description").value


        // adicionando o titulo na nota
        let NoteTitle = document.createElement('p')
        NoteTitle.textContent = this.noteObjectPublic.title
        note.insertAdjacentElement("beforeend", NoteTitle)

        // criando o ID na nota/note e inserindo no objeto note publico
        let noteId = document.createElement('p')
        noteId.value = Math.random().toFixed(2)
        noteId.innerText = noteId.value
        noteId.classList = "id"
        this.noteObjectPublic.id = noteId.value
        note.insertAdjacentElement("beforeend", noteId)


        // adicionando a quantidade de subtask na nota
        let NoteSubTask = document.createElement('p')
        this.noteObjectPublic.subtaskCount = document.querySelectorAll(".subtask").length
        NoteSubTask.textContent = `0 de ${this.noteObjectPublic.subtaskCount} subtask`
        note.insertAdjacentElement("beforeend", NoteSubTask)
        this.factory(noteId.value, this.noteObjectPublic.title, this.noteObjectPublic.description, this.noteObjectPublic.subtaskCount)
    }
    GetSubtaskValue = () => {
        this.subtaskValue.forEach((value, index) => {
            console.log(value)
        })
    }

    // }

    factory = (noteId, title, description, quantiSubtask) => {
        let ObjectName = {}
        ObjectName = { noteId, title, description, quantiSubtask }
        this.allData.push(ObjectName)
            // console.log(this.allData)
            // console.log(this.noteObjectPublic)
    }
    start = () => {
        this.click()


    }

}
const set = new InsertTask('.newTask', '.role', '.newSubTask', '.modal')
set.start()