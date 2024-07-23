import { css } from 'lit';

export default css`
  ul.grid {
    display: grid;
    list-style: none;
    grid-gap: 10px;
    margin: 0;
    padding: 0;
  }

  ul.grid li {
    list-style: none;
    display: flex;
    width: 100%;
  }

  ul.grid li > div {
    flex-grow: 1;
  }

  ul.grid.fixed {
    margin: var(--ilw-grid--main-margin, 0);
  }

  .grid-outer.fixed {
        left:50%;
        margin-left:-50vw;
        margin-right:-50vw;
        padding-left:0;
        padding-right:0;
        position:relative;
        right:50%;
        width:100vw;
    }

  .grid-outer.blue {
        background-color: var(--il-blue);
    }

  .grid-outer.orange {
      background-color: var(--il-orange);
  }

  .grid-outer.blue-gradient {
      background: var(--il-gradient-blue), var(--il-blue-darker-1);
  }
  .grid-outer.orange-gradient {
      background: var(--il-gradient-orange), var(--il-altgeld);
  }
  
  .grid-outer.gray {
      background-color: var(--il-storm-lighter-4);
  }

  ::slotted(*) {
    height: 100%;
    box-sizing: border-box;
  }
`;