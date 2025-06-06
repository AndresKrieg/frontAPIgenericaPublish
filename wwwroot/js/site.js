window.bootstrapModalShow = (id) => {
    var modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
};

window.bootstrapModalHide = (id) => {
    var modalElement = document.getElementById(id);
    var modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
};
