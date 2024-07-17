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
* **width:** no width attribute will make it fit the container, *full* will break the container and go full width, and *auto* will break the container, but only for the background
* **theme:** *blue*, *orange*, *blue-gradient*, *orange-gradient*, *gray*, *white*. Defaults to *white*. This is only the background of the grid. 
* **align:** *left* or *center*, defaults to left
* **padding:** standard length / percentage CSS of padding around the grid. Defaults to no padding

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

## Accessibility Notes and Use

Items inside the grid should remain in semantic order. Do not attempt to change the order of the components by using CSS *direction: rtl* or ordering. 

## External References
* https://developer.mozilla.org/en-US/docs/Web/CSS/grid
* https://www.nngroup.com/articles/using-grids-in-interface-designs/ (see Example 3: Modular Grid)
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
