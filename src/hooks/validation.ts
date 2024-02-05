import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { computed } from "vue";

export function useValidation(_schema: z.ZodObject<any, any>) {
    const schema = toTypedSchema(_schema);

    const { values, defineField, errors } = useForm({
        validationSchema: schema,
    });

    const [email, emailAttrs] = defineField("email");

    const handlers = {
        "update:modelValue": (e: any) => {
            emailAttrs.value.onInput(e);
        },
        blur: (e: any) => {
            emailAttrs.value.onBlur(e);
        },
        change: (e: any) => {
            emailAttrs.value.onChange(e);
        },
    };

    const attrs = computed(() => {
        return {
            error: !!errors.value.email,
            errorMessage: errors.value.email,
        };
    });

    return {
        values,
        email,
        errors,
        handlers,
        attrs,
    };
}
