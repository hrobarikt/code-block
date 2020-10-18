# code-block

A code-block element that can be used for rendering code snippets inside of the HTML. It is using [PrismJS](https://prismjs.com/) for syntax highlighting.
Other suggestions for improvement are welcomed 👋

## Features:

- syntax highlighting 🚥
- supports multiple themes 🎨
- copy to clipboard 📋
- line numbering 🔢
- line highligting 📄

## TODO:

- provide support for more languages - enable autoloading of additional languages
- refactor themes, extract common styling, don't mix different font styles and sizes

## Example

![image](https://user-images.githubusercontent.com/19704768/96255967-1d9a9080-0fb8-11eb-818a-36236360a2cb.png)

## Usage

```jsx

<code-block language="javascript" label="demo.js">
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from "./view";
import codeblockActions from "./actions";

createCustomElement('code-block', {
renderer: {
type: snabbdom
},
properties: {
label: {},
language: {}
},
view,
...codeblockActions,
styles
});
</code-block>
```

## Properties:

| Param          | Type      | Description                                                                 | Default    |
| -------------- | --------- | --------------------------------------------------------------------------- | ---------- |
| label          | `string`  | Label that will be displayed in the code header                             |            |
| language       | `string`  | Sets the code language that will be used for syntax highlighting            | javascript |
| theme          | `string`  | Specifies a visual theme applied to syntax highlighting                     | prism      |
| lineNumbers    | `boolean` | If specified, it will also display the line numbers                         | false      |
| highlightLines | `string`  | Specify the lines to be highlighted in the code following the simple format |            |
| copyDisabled   | `boolean` | When set to true, it will not display the copy to clipboard button          | false      |
