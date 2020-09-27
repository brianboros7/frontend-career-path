const myEmojis = ["😇", "😎", "😱", "🤮", "🙏"]

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener('click', function() {
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) { 
        myEmojis.push(emojiInput.value) { 
        emojiImput.value = ""
        emojiContainer.innerHTML = ""
    }
})

const unShiftBtn = document.getElementById("unshift-btn")
unShiftBtn.addEventListener('click', function() {
    const emojiInput = docuemnt.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmoji.unShift(emojiINput.value)
        emojiInput = "" 
        renderEmojis()
    }
})

const popBtn = document.getElementById('pop-btn')
popBtn.addEventListener('click', function() {
    myEmoji.shift()
    renderEmoji()
})

const shiftBtn = document.getElementById('shift-btn') 
shiftBtn.addEventListner('click', function() {
    myEmojis.shift()
    renderEmojis()
})