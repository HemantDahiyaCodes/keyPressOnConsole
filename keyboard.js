const message = document.querySelector("#message");
message.addEventListener("keyup", (event) => {
    console.log(event.key, event.code);

});