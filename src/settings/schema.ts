import {RJSFSchema} from '@rjsf/utils';

export const schema: RJSFSchema = {
    type: "object",
    required: ["position", "rotation", "dimensions"],
    properties: {
        position: {
            type: "array",
            items: {type: "number", minimum: -100, maximum: 100},
        },
        rotation: {
            type: "array",
            items: {type: "number", minimum: 0, maximum: 360},
        },
        dimensions: {
            type: "array",
            items: {type: "number", minimum: 1, maximum: 100},
        },
        color: {
            type: "string",
            default: "orange",
        }
    },
};
