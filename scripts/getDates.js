document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = new Date(document.lastModified);
    var footer = document.querySelector('footer');
    var span = document.createElement('span');
    span.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
    footer.appendChild(span);
});