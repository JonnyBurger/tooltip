# @jonny/popover

The popover that I use in my projects :)

### Usage

```jsx
import Popover from '@jonny/popover'

export default () => {
    const [popover, setPopover] = useState(false);
    return (
        <Popover
          popupVisible={popover}
          preferredPlacement="bottom"
          onClose={() => {
            setPopover(false);
          }}
          tip={<div>hi there</div>}
        >
          <Button onClick={() => setPopover(!popover)}>Click on me</Button>
        </Popover>
    )
}

```


## Props

### `tip`
Either string or React Markup

### `popupVisible`
Whether the popup is open.

### `onClose`
Callback for when clicked outside the popup or if Escape was pressed.

### `preferredPlacement`
A PopperJS.Placement - one of:
```js
'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start'
```

Note that the tooltip might end up being placed differently to avoid the edges of the viewport.

### `arrowSize`

Size of the arrow of the tooltip. Default is `8` resulting in a 8x8px square rotated.

### `style`
Styles to be applied to both the bubble and the arrow. For borders, use the props instead.

### `bubbleStyle`
Styles to be applied to the bubble.

### `arrowStyle`
Styles to be applied to the arrow.

### `bubbleProps`
Props to be applied to the bubble `<div>`

### `arrowProps`
Props to be applied to the arrow `<div>`.


### `borderWidth`

Width of the Tooltip border (bubble and arrow). Default: `0`


### `bubbleBorderWidth`

Width of the border of the tooltip bubble. Overrides `borderWidth`

### `arrowBorderWidth`

Width of the border of the tooltip arrow. Overrides `borderWidth`


### `borderColor`

Color of the Tooltip border (bubble and arrow).
Default `#b3b3b3`

### `bubbleBorderWidth`

Color of the bubble border.
Overrides `borderColor`

### `arrowBorderWidth`

Color of the arrow border.
Overrides `borderColor`

### `borderStyle`

Style of the Tooltip border (bubble and arrow).
Default `solid`

### `bubbleBorderStyle`

Border style of the Tooltip bubble.
Overrides `borderStyle`

### `arrowBorderStyle`

Border style of the Tooltip arrow.
Overrides `borderStyle`

## Also see

- [@jonny/tooltip](https://npmjs.com/package/@jonny/tooltip)
