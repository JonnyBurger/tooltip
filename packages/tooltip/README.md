# @jonny/tooltip

The tooltip that I use in my projects :)

### Usage

```jsx
import Tooltip from '@jonny/tooltip'

export default () => (
    <Tooltip
        tip={"hi there"}
        preferredPlacement="bottom-end"
        popupProps={{
            style: {
                backgroundColor: "blue"
            }
        }}
    >
      <button>hover over me</button>
    </Tooltip>
)

```

## Props

### `tip`
Either string or React Markup

### `preferredPlacement`
A PopperJS.Placement - one of:
```js
'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start'
```

Note that the tooltip might end up being placed differently to avoid the edges of the viewport.

### `arrowSize`

Size of the arrow of the tooltip. Default is `8` resulting in a 8x8px square rotated.

### `borderWidth`

Width of the Tooltip border (bubble and arrow). Default: `0`

### `borderColor`

Color of the Tooltip border (bubble and arrow).
Default `#b3b3b3`

### `borderStyle`

Style of the Tooltip border (bubble and arrow).
Default `solid`

### `style`
Styles to be applied to both the bubble and the arrow.

### `bubbleStyle`
Styles to be applied to the bubble

### `arrowStyle`
Styles to be applied to the arrow.

### `bubbleProps`
Props to be applied to the bubble `<div>`

### `arrowProps`
Props to be applied to the arrow `<div>`.
