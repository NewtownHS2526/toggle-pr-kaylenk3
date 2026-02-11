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

const changeFontColor = () => {
    heading.classList.add("blue-text");
};
const changeSubtitleColor = () => {
    subtitle.classList.add("blue-text");
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

heading.addEventListener("click", changeFontColor);
subtitle.addEventListener("click", changeSubtitleColor);
replyBtn.addEventListener("click", showReply);
sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);
openBtn.addEventListener("click", openMessage);
closeBtn.addEventListener("click", closeMessage);
unreadBtn.addEventListener("click", markUnread);
subtitle.addEventListener("click", toggleCustomClass);