# isitholidays-fi
Is a simple web page that inform you if today is a holiday in Finland or not. 

## Feature
- Display if current date is a holiday with its name
- Plays a random generic animation using HTML canvas or a specific one for that holiday

## Animation
the animation are drawn on a canvas. The animation are implemented under `./animations.js` where you will find an array for generic and specfic holiday animations. Under the arrays, an object is defined with:
- `present` method which receives `holiday`, `canvas` HTML element, `info` HTML element.
  - `holiday` is an object returned by [date-holidays lib](https://github.com/commenthol/date-holidays#holiday-object)
  - `canvas` is an HTML element which by default is taking the whole display area.
  - `info` is an HTML element which holds the textual information
- `name` the name of the animation
- `holidayName` is only present for specific holiday animation object, used to filter the animation. It needs to follow the english variant of the holiday name as defined in date-holidays [see here](https://github.com/commenthol/date-holidays/blob/master/data/names.yaml)