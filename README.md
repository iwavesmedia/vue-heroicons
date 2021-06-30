# Vue-Heroicons

## This repo is a fork of [vue-hicons](https://github.com/ArielOnoriaga/vue-hicons). <br>Use at your own discretion

### Following is the original readme.

## Project setup

```bash
npm i --save-dev @iwavesmedia/vue-heroicons
```

## Why use Vue-Heroicons?

The answer to this question is very simple:

* Write less, do more
* It's easy to use and read
* More syntactic

### What does this package solve for me?

If you use Heroicons you should write something like this:

```html

<svg
    class="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
    />
</svg>
```

With Vue-Heroicons you just have to write something like this:

```vue

<VueHeroicon
    name="academic_cap"
    is-filled
/>
```

### How to import this dependency

To import the component correctly we have to use the following import in the component that we want to use

```javascript
import VueHeroicon from "@iwavesmedia/vue-heroicons";

export default {
    components: {
        VueHeroicon
    }
}
```

### Usage guide

| Prop | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| class-icon | String | - | false |
| clip-rule | String | nonzero | false |
| clip-rule-path2 | String | - | false |
| fill-color | String | none | false |
| fill-rule | String | nonzero | false |
| fill-rule-path2 | String | - | false |
| is-filled | Boolean | false | false |
| name | String | x | true |
| size | String-Number | - | false |
| stroke-color | String | #000 | false |
| stroke-linecap | String | round | false |
| stroke-linejoin | String | round | false |
| stroke-width | Number | 2 | false |
| view-box | String | 0 0 24 24 | false |

### How to use filled icons?

Example:

```vue

<VueHeroicon
    name="archive"
    is-filled
/>
```

### Supported icons

Heroicons: https://heroicons.dev/
