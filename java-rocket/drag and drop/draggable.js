
class draggable {
    dragSrcEl
    list
    update
    constructor(options) {
        this.setUpList(options)
        this.list=options.list
        if(options.update) this.update=options.update
        for (let listItem of options.el.children) {
            this.addDnDHandler(listItem)
        }
    }

    setUpList(options) {
        let { list, el: element, template } = options;

        if (!list) throw Error("the list dosent exist")
        if (!element) throw Error("the element dosent exist")
        if (!template) throw Error("please add a template function")
        if (!Array.isArray(list)) throw Error("the list inst an array, add a list")
        if (typeof template !== "function") throw Error("template must be function")
        list.forEach(item => element.innerHTML += template(item))
    }

    addDnDHandler(element) {
        element.setAttribute("draggable", true)


        element.addEventListener('dragstart', this.handleDragStart.bind(this))
        element.addEventListener('drageneter', this.handleDragEneter.bind(this))
        element.addEventListener('dragover', this.handleDragOver.bind(this))
        element.addEventListener('dragleave', this.handleDragLeave.bind(this))
        element.addEventListener('drop', this.handleDragDrop.bind(this))
        element.addEventListener('dragend', this.handleDragEnd.bind(this))


    }

    handleDragStart(e) {
        this.dragSrcEl = e.target
        e.dataTransfer.setData("text/html", e.target.outerHTML)
        e.target.classList.add("dragElem")
    }
    handleDragEneter(e) {
    }
    handleDragOver(e) {
        if (e.preventDefault) e.preventDefault();

        e.target.classList.add('over');

    }
    handleDragLeave(e) {
        // console.log("drag Leve",e.target);
        e.target.classList.remove("over")
    }
    handleDragDrop(e) {
        console.log("drag drop", e.target);
        let target = e.target.closest(".list-item")
// console.log(target.parentNode);
        if (this.dragSrcEl !== target) {
            target.parentNode.removeChild(this.dragSrcEl)
            let dropHtml = e.dataTransfer.getData("text/html")
            target.insertAdjacentHTML("beforebegin",dropHtml)
            this.addDnDHandler(target.previousSibling)
        }
        e.target.classList.remove("over")

    }
    handleDragEnd(e) {
        console.log("drag end", e.target);
        e.target.classList.remove("dragElem")
      let newList=[]
      console.log(list.querySelectorAll(".list-item"),"list");
        list.querySelectorAll(".list-item").forEach(el=>newList.push(this.list.find(item =>el.id==item.id)))
      this.update(newList)
    }

}