notelist = new NoteList()
noteController = new NoteController(notelist)
note = new Note("Favourite Drink: seltzer")
note2 = new Note("Favourite Pudding: Carrot Cake")
noteController.notelist.addNote(note)
noteController.notelist.addNote(note2)
notelistview = new NoteListView(noteController.notelist)
noteController.changeText()