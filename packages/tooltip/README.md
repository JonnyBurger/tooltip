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
