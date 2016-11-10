(function(exports) {

    var idCounter = -1;

    function Note(text) {
        this.string = text;
        this.id = idCounter++
    }

    Note.prototype.text = function() {
        return this.string;
    }

    exports.Note = Note;

})(this)