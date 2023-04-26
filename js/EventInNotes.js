class EventNotes {
    constructor(todo, doing, done, contagemTodo, contagemDoing, contagemDone) {
        this.todo = document.querySelector(todo)
        this.doing = document.querySelector(doing)
        this.done = document.querySelector(done)
        this.contagemTodo = document.querySelector(contagemTodo)
        this.contagemDoing = document.querySelector(contagemDoing)
        this.contagemDone = document.querySelector(contagemDone)


    }
    talk = () => {
        this.contagemTodo.innerText = `(${ this.todo.children.length - 1 })`
        this.contagemDoing.innerText = `(${this.doing.children.length - 1})`
        this.contagemDone.innerText = `(${this.done.children.length - 1})`


    }
    start = () => {
        setInterval(() => {
            this.talk()
        }, 100)
    }
}
const events = new EventNotes('.todo', '.doing', '.done', '.contagem_todo', '.contagem_doing', '.contagem_done')
events.start()