class showSubstasks {
    constructor(notes) {
        this.notes = document.querySelector(notes)
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
}