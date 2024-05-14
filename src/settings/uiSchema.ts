import {UiSchema} from "@rjsf/utils";

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
