import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-grid";

const content = html`
    <ilw-grid>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
    </ilw-grid>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Item 1");
    await expect.element(element).toBeInTheDocument();
});