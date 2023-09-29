---0.4---
    browser->>input.note: USER text input
    //User writes something to the input element named "note"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    //When submit element is pressed, it adds the value from the note element to data.json and deletes the oldest entry as it holds only 100 notes.
    //Browser is refreshed as a result of this action.
--------

---0.5---
    //Loading the page is the same as previously, but GET fetches data from different source (https://studies.cs.helsinki.fi/exampleapp/spa)
    //and Js is loaded from different source aswell (https://studies.cs.helsinki.fi/exampleapp/spa.js)
    //Loading time is also much quicker for single app version.
---------

---0.6---
    //Instead of refreshing the whole page like earlier, now only the container refreshes.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    //Status code for this action is "201 Created" which means other methods are used to add the note to the data than previously.
---------
