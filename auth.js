const inputs = $("input");
Array.from(inputs).forEach(input => {
    if(input.type === "email") 
        input.value = randomText(15) + "@" + randomText(5) + ".com";
    else if(input.type === "text" || input.type === "password") 
        input.value = randomText(10);
});

const form = $("form");
form.submit();

function randomText(length) {
    var result      = ''
    var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ )
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}