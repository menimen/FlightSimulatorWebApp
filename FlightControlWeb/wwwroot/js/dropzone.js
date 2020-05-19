﻿(function () {
    let dropzone = document.getElementById('dropzone');

    let upload = function (files) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://localhost:44383/api/flightplan");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(files);
    }

    dropzone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'dropzone';
        for (let i = 0; i < e.dataTransfer.files.length;i++) {
            upload(e.dataTransfer.files[i])
        }
    };

    dropzone.ondragover = function () {
        this.className = 'dropzone dragover';
        return false;
    };
    dropzone.ondragleave = function () {
        this.className = 'dropzone';
        return false;
    };
}());