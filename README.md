## Setup

Add toolbarscript.js to index.html file:

```html
<script src='./toolbarscript.js' ></script>
```

Notice that ```toolbarscript.js``` must be in the same directory as ```index.html``` file.

## Usage

Usage of the widget look like following:

```html
<script>
  var myBar = new MWPjs.bar({
      message: 'msg here',
      close: function(),
      clickOk: function(),
      position: 'top'
  });
</script>
```

argument | description
--- | ---
message | it's string message visible on the widget
--- | ---
close | it's callback function which will start after clicking close button
--- | ---
clickOk | it's callback function which will start after clicking ok button
--- | ---
position | its string which defines position of widget **(only 'top' or 'bottom)**
