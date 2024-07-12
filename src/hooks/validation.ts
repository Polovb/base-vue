import { z } from "zod";
import {
    useFieldArray,
    FieldContext,
    useField,
    useForm as useVeeValidateForm,
    FieldArrayContext,
    FormContext,
} from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import {
    computed,
    inject,
    InjectionKey,
    MaybeRefOrGetter,
    provide,
    Ref,
    ref,
    toValue,
} from "vue";

const ValidationFieldIK: InjectionKey<FieldContext> =
    Symbol("ValidationFieldIK");

const FormContextIK: InjectionKey<
    {
        isEditing: Ref<boolean>;
    } & FormContext
> = Symbol("FormContextIK");

const ValidationFieldArrayIK: InjectionKey<FieldArrayContext> = Symbol(
    "ValidationFieldArrayIK",
);

export function provideValidatedField(
    opts: MaybeRefOrGetter<{ name: string }>,
) {
    const field = useField(() => toValue(opts).name, undefined, {});

    provide(ValidationFieldIK, field);
}

export function provideForm(opts: MaybeRefOrGetter<{ validationSchema: any }>) {
    const isEditing = ref(false);

    const form = useVeeValidateForm({
        validationSchema: toTypedSchema(toValue(opts).validationSchema),
        initialValues: {
            bananas: ["banana1"],
        },
    });

    const formContext = {
        ...form,
        isEditing,
    };

    provide(FormContextIK, formContext);

    return formContext;
}

export function useForm() {
    return inject(FormContextIK)!;
}

export function provideValidatedFieldArray(
    opts: MaybeRefOrGetter<{ name: string }>,
) {
    const field = useFieldArray(() => toValue(opts).name);

    provide(ValidationFieldArrayIK, field);
}

export function useValidatedField<F>(): FieldContext<F> {
    return inject(ValidationFieldIK) as FieldContext<F>;
}

export function useValidatedFieldArray<F>(): FieldArrayContext<F> {
    return inject(ValidationFieldArrayIK) as FieldArrayContext<F>;
}

export function useValidation(_schema: z.ZodObject<any, any>) {
    const schema = toTypedSchema(_schema);

    const { values, defineField, errors } = useVeeValidateForm({
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
