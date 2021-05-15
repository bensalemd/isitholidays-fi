const CANVAS_EL = document.getElementById("stage");
const TEXT_EL = document.getElementById("info");
const DEFAULT_LANGUAGE = "en";
const COUNTRY_CODE = "FI";

const holidays = new Holidays.default();
holidays.init(COUNTRY_CODE);
holidays.setLanguages(DEFAULT_LANGUAGE);

let holiday = holidays.isHoliday(new Date());

if (holiday) {
    holiday = holiday[0];
    TEXT_EL.innerText = `Yes\nIt is ${holiday.name}`;
    let animation = animations.specific.find(
        (item) => item.holidayName === holiday.name
    );

    if (!animation) {
        const randomGenericAnimation = Math.floor(
            Math.random() * animations.generic.length
        );
        console.log(randomGenericAnimation);
        animation = animations.generic[randomGenericAnimation];
    }

    animation?.present(holiday, CANVAS_EL, TEXT_EL);
} else {
    TEXT_EL.innerText = "No";
}
