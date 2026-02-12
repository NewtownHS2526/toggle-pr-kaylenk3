const heading = document.querySelector("#heading");
const subtitle = document.querySelector("#subheading"); 
const replyBtn = document.querySelector("#reply-button");  
const replyMessage = document.querySelector("#reply-message");
const sendBtn = document.querySelector("#send-button");
const cancelBtn = document.querySelector("#cancel-button");
const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const unreadBtn = document.querySelector("#mark-button");
const closeBtn = document.querySelector("#close");
const targetElement = document.querySelector("#sender");
const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");
const deleteBtn = document.querySelector("#Delete");
const readBtn = document.querySelector("#read");
const darkModeBtn = document.querySelector("#dark-mode");
const body = document.querySelector("body");


const changeFontColor = () => {
    heading.classList.toggle("blue-text");
};
const changeSubtitleColor = () => {
    subtitle.classList.toggle("blue-text");
};
const showReply = () => {
    replyMessage.classList.remove("hidden");
};
const hideReply = () => {
    replyMessage.classList.add("hidden");
};
const openMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    unreadBtn.classList.remove("hidden");
};
const closeMessage = () => {
    inboxMessage.classList.add("hidden");
};
const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};
const toggleCustomClass = () => {
    if (targetElement.classList.contains("my-custom-class")) {
        targetElement.classList.remove("my-custom-class");
    } else {
        targetElement.classList.add("my-custom-class");
    }
};
const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};
const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};
const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};
const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

heading.addEventListener("click", changeFontColor);
subtitle.addEventListener("click", changeSubtitleColor);
replyBtn.addEventListener("click", showReply);
sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);
openBtn.addEventListener("click", openMessage);
closeBtn.addEventListener("click", closeMessage);
unreadBtn.addEventListener("click", markUnread);
subtitle.addEventListener("click", toggleCustomClass);
checkbox.addEventListener("click", handleCheckbox);
deleteBtn.addEventListener("click", handleDelete);
readBtn.addEventListener("click", markRead);
darkModeBtn.addEventListener("click", toggleDarkMode);
