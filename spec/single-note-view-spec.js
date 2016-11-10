describe('SingleNoteView', function() {
    var note = new Note("I can show you the World")
    var singlenoteview = new SingleNoteView(note);
    var html = singlenoteview.convertToHtml(note);
    expect(html).toEqual("<div> I can show you the World </div>")
})
