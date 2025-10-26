import { SPACE } from "./consts";
const toLower = (value)=>value.toLowerCase();
const toUpper = (value)=>value.toUpperCase();
const capitalize = (value)=>[
        value[0]?.toUpperCase(),
        value
    ].join(SPACE);
export { capitalize, toLower, toUpper };
