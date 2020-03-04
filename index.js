const save = () => {
    let notice = {
        title: document.getElementById("notice_title").value,
        text: document.getElementById("notice_text").value
    }

    let notices = JSON.parse(localStorage.getItem('notices')) ? JSON.parse(localStorage.getItem('notices')) : []

    notices.push(notice)
    update(notices)

    document.getElementById("notice_title").value = ''
    document.getElementById("notice_text").value = ''

    render(notices)
}

const render = (notices) => {
    let list = document.getElementById('list')

    if (notices) {
        while (list.firstChild) {
            list.firstChild.remove()
        }

        notices.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element.title
            list.appendChild(li)
        });
    }
}

const update = (data) => {
    localStorage.setItem('notices', JSON.stringify(data))
}

const show = (target) => {
    let result = document.getElementById('notice_text_result')

    let notices = JSON.parse(localStorage.getItem('notices')) ? JSON.parse(localStorage.getItem('notices')) : []
    
    if (notices) {
        for (let element of notices) {
            if (element.title === target.innerText) {
                result.value = element.title + ': ' + element.text
                break
            }
        }
    }
}

    render(JSON.parse(localStorage.getItem('notices')))
    document.getElementById('list').addEventListener('click', (e) => {
      e.preventDefault()
      show(e.target)
    })