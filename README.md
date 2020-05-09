# emoji-list

Categorised emoji list, which is exported in a JSON object.

# Categorisation structure

Emoji list has been categorized in the following structure:

- [activities](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/activities.js),
- [animals](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/animals.js),
- [body](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/body.js),
- [clothingAndAccessories](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/clothingAndAccessories.js),
- [flags](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/flags.js),
- [food](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/food.js),
- [nature](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/nature.js),
- [objects](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/objects.js),
- [people](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/people.js),
- [smileys](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/smileys.js),
- [symbols](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/symbols.js),
- [travel](https://github.com/Vorbert-Kruk/emoji-list/blob/master/categories/travel.js)

# Accesing the data

You can access the data by importing category objects independently, eg.:

```js
const smileyEmojies = require('./categories/smileys');

console.log(smileyEmojies.winkingFace);
```

or by importing and using the whole [emoji list object](https://github.com/Vorbert-Kruk/emoji-list/blob/master/emojis.js), eg.:

```js
const emojis = require('./emojis');

console.log(emojis.smileys.winkingFace);
```

# Suggestion and contribution

If you'd have some suggestions or ideas of how to improve the quality of the list, then feel free to contribute in this repo :)
