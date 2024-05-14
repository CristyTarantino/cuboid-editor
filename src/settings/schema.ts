import {RJSFSchema, UiSchema} from '@rjsf/utils';

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

export const uiSchema: UiSchema = {
    "ui:submitButtonOptions": {
        "norender": true,
    },
    position: {
        "ui:title": "Position (x, y, z)",
        items: {
            "ui:widget": "range",
        },
        "ui:options": {
            orderable: false,
            addable: false,
            removable: false
        }
    },
    rotation: {
        "ui:title": "Rotation (x, y, z)",
        items: {
            "ui:widget": "range",
        },
        "ui:options": {
            orderable: false,
            addable: false,
            removable: false
        }
    },
    dimensions: {
        "ui:title": "Dimensions (width, height, depth)",
        items: {
            "ui:widget": "range",
        },
        "ui:options": {
            orderable: false,
            addable: false,
            removable: false
        }
    },
    color: {
        "ui:widget": "color",
        "ui:title": "Choose Cuboid Color: "
    }
};
