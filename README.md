# ilw-grid

Links: **[ilw-grid in Builder](https://builder3.toolkit.illinois.edu/component/ilw-grid/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The grid is used to organize a large group of components in a grid. Items in the grid are arranged from left to right until the row is full, then from left to right again in a new row below the previous row. 

You can define the width of a grid item, and this along with the container width will determine the number of columns and rows. For example, if you define the width of an individual item as 250px and you are in a 1200px width container, you will get roughly four items per row (250 * 4 = 1000). 

If you set the innerwidth higher than the container width, then it will shrink down to the container width. 

There will be an automatic 10px gap (gutter) between the columns and rows. This gap does not include outside padding.  

This uses the [grid CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid), along with the [minmax](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) and [repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) rules. 

This will automatically style the components inside the grid to the height of the largest item in the row. 

Attributes are:
* **innerwidth:** standard length / percentage CSS, defaults to 350px
* **width:** no width attribute will make it fit the container, `full` will break the container and go full width, `auto` will break the container, but only for the background, and `page` will go full width but only for the background.
* **theme:** `blue`, `orange`, `blue-gradient`, `orange-gradient`, `gray`, `white`. Defaults to `white`. This is only the background of the grid. 
* **padding:** standard length / percentage CSS of padding around the grid. Defaults to `0 0 40px 0` to accommodate cards;
* **gap**: a length / percentage CSS of padding between the columns. Defaults to none. 

## Code Examples

```html
<ilw-grid>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
   <ilw-card>...</ilw-card>
</ilw-grid>
```

## CSS-only grid

You can also create `<div>` or `<ul>` with a grid without using the ilw-grid component by using the `ilw-grid` class. 

This is in the ilw-grid layer, so you can use the [layer syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) to control how this cascades with other CSS layers. 

The column gap is 10px, but can be changed via the `--ilw-grid--gap` CSS variable. The grid template columns is set to 250px / 1fr, but can be changed via the `--ilw-grid--template-columns` CSS variable.

### CSS-only helper classes
* **ilw-fixed**: Puts margins around the grid

## Accessibility Notes and Use

Items inside the grid should remain in semantic order. Do not attempt to change the order of the components by using CSS `direction: rtl` or ordering. 

The items in the grid are in an unordered list so assistive technology can help the end user navigate through a large list of items. 

We spoke about including lists versus headers, and it was decided that having both would be overkill. So you probably don't need to add headers to the contents of the grid. 

This is using the manual slot assignment process using the MutationObserver interface to watch for changes in the DOM. 

## External References
* https://developer.mozilla.org/en-US/docs/Web/CSS/grid
* https://www.nngroup.com/articles/using-grids-in-interface-designs/ (see Example 3: Modular Grid)
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
* https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#slotassignment
* https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe 