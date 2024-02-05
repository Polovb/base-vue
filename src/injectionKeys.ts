import { InjectionKey, Ref } from "vue";

export const injectionKey: InjectionKey<Readonly<Ref<number>>> =
    Symbol("$injectionKey");
