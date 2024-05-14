import Form, {IChangeEvent} from "@rjsf/core";
import {Cuboid} from "../types";
import {schema, uiSchema} from "../settings/schema";
import validator from '@rjsf/validator-ajv8';

interface CuboidFormProps {
    cuboidData?: Cuboid
    onChange: (e: IChangeEvent) => void;
}
const CuboidForm = ({cuboidData, onChange}: CuboidFormProps) => {
    if (!cuboidData) return null;
    return (
        <Form
            key={cuboidData.id}
            schema={schema}
            uiSchema={uiSchema}
            formData={cuboidData}
            onChange={onChange}
            validator={validator}
        />
    );
};

export default CuboidForm;
