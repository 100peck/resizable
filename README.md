# React resize component

This project was created as an Interview for unnamed company. It's a simple React component that allows to the user increase or decrease the width or height of a container wrapping any child component passed to the Resizer component. 

## Sample usage

```javascript
<Resizable initialSize={{x: 250, y: 250}}>
    <div>Random lorem ipsum text.</div>
</Resizable>
```

## Options

You can pass other options along with height and width:

* `initialSize`: initial width and height of the resizeable container. 
* `className`: class name for custom css.
* `icon`: user can pass icon or text for handles.

