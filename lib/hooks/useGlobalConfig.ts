/*
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-11 10:04:19
 * @LastEditTime: 2024-05-11 10:32:30
 */
import { BASE_PROVIDER_INJECTION_KEY } from "@lib/models/constants";
import { inject } from "vue";
import zh from "@lib/locale/zh";
import en from "@lib/locale/en";
import { ConfigProviderProps, Languages } from "@lib/models";

const localeMap = new Map([
    [Languages.EN, en],
    [Languages.ZH, zh],
])

export default function useGlobalConfigInject() {
    const config = inject<ConfigProviderProps>(BASE_PROVIDER_INJECTION_KEY)

    const t = (key: keyof typeof zh) => {
        return localeMap.get(config.locale)[key]
    }

    return {config, t}
}