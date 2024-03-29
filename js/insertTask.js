class InsertTask {
    constructor(set, role, addSubTask, modal, infoModal) {
        this.infoRequired = ['title', 'description']
        this.set = document.querySelector(set)
        this.role = document.querySelector(role)
        this.addSubTask = document.querySelector(addSubTask)
        this.modal = document.querySelector(modal)
        this.infoModal = document.querySelector(infoModal)
        this.subtaskValue = []
        this.closeSub = []
        this.allData = []
        this.noteObjectPublic = {}
        this.subtaskValue = document.querySelectorAll(".subtask")
        this.notes = []




    }
    click = () => {
        this.set.addEventListener('click', () => {
            this.setRole()
            this.modal.classList.remove('active')
            this.notes = document.querySelectorAll(".note")
                // this.notes.forEach((value, index) => {
                //     value.addEventListener("click", (index) => {
                //         // this.showAllInfo(index)
                //         console.log(index[0])
                //     })
                // })
            if (this.notes.length > 0) {
                this.CountNotes()
            }

            this.clearForm()
        })
        this.addSubTask.addEventListener('click', () => {
                this.Addsubtask()
                this.closeSub.forEach((value, index) => {
                    value.addEventListener('click', () => {
                        this.deleteSubTask(index)
                    })
                })
            })
            // if(document.querySelectorAll('.notes'))
            // this.notes.forEach((value, index) => {

        // })



    }
    CountNotes = () => {
            this.notes.forEach((value, index) => {
                value.addEventListener('click', () => {
                    value.forEach((value) => {
                        console.log(value)
                    })
                })
            })
        }
        // setar o note em sua posição no documento 

    setRole = () => {
        this.noteObjectPublic.roleModal = this.role.options[this.role.selectedIndex].value
        const local = document.querySelector(`.${this.noteObjectPublic.roleModal}`)
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

        // pegando os valores da subtask
        this.subtaskValue = document.querySelectorAll(".subtask")


    }

    // pegando valores da subtask 

    GetSubtaskValue = () => {
        this.noteObjectPublic.subtaskValue = []
        this.subtaskValue.forEach((value) => {
            this.noteObjectPublic.subtaskValue.push(value.value)
        })
    }

    // deletando as substasks  

    deleteSubTask = (valor) => {
        this.quantiSubTask[valor].remove()
        this.subtaskValue = document.querySelectorAll(".subtask")

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

        // note.insertAdjacentElement("beforeend", noteId)


        // adicionando a quantidade de subtask na nota
        let NoteSubTask = document.createElement('p')
        this.noteObjectPublic.subtaskCount = document.querySelectorAll(".subtask").length
        NoteSubTask.textContent = `0 de ${this.noteObjectPublic.subtaskCount} subtask`
        note.insertAdjacentElement("beforeend", NoteSubTask)
        this.GetSubtaskValue()
        this.factory(noteId.value, this.noteObjectPublic.title, this.noteObjectPublic.description, this.noteObjectPublic.subtaskValue, this.noteObjectPublic.subtaskCount, this.noteObjectPublic.roleModal)
    }


    factory = (noteId, title, description, subtaskValue, quantiSubtask, roleModal) => {
        let ObjectName = {}
        ObjectName = { noteId, title, description, subtaskValue, quantiSubtask, roleModal }
        this.allData.push(ObjectName)
            // console.log(this.allData)
    }
    showSubstasks = (value) => {
        // criando suas divs

        const SubtaskInfo = document.querySelector('.SubTaskInfo')
        const infoSubs = document.createElement('div')
        const subCheckBox = document.createElement('input')
        const valuesSub = document.createElement("p")

        // inserindo valores  
        valuesSub.innerText = value
        subCheckBox.type = "checkbox"

        // inserindo as suas classes
        infoSubs.classList = "infoSubs"
        valuesSub.classList = 'valuesSub'


        // inserindo na div principal
        infoSubs.insertAdjacentElement("beforeend", subCheckBox)
        infoSubs.insertAdjacentElement("beforeend", valuesSub)
        SubtaskInfo.insertAdjacentElement('beforeend', infoSubs)
    }
    showAllInfo = (index) => {
        let dataRequest = this.allData[index]
            // console.log(dataRequest)

        for (let value in dataRequest) {
            if (document.querySelector(`.${value}`)) {
                document.querySelector(`.${value}`).innerText = dataRequest[value]
            }
        }
        if (dataRequest.subtaskValue.length > 0) {
            dataRequest.subtaskValue.forEach((value, index) => {
                this.showSubstasks(value)
            })
        }
        this.infoModal.classList.add('active')
        this.modal.classList.remove('active')

    }
    clearForm = () => {
        document.querySelector("#title").value = ''
        document.querySelector("#description").value = ''
        document.querySelectorAll('.subtask').forEach((data) => {
            data.value = ''
        })
    }
    start = () => {
        this.click()
            // setInterval(() => {
            //     this.CountNotes()
            // }, 1000)


    }

}
const set = new InsertTask('.newTask', '.role', '.newSubTask', '.modal', '.infoModal')
set.start()