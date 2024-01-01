function generate(){
    // console.log("Generated");
    const data = document.querySelector('#url').value;
    console.log(data);
    const generatedQr = document.querySelector('#generatedQr');
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
    generatedQr.src = api;
}

function download() {
    window.print();
}