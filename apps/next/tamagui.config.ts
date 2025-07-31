import { defaultConfig } from '@lightstrikelabs/tamagui'
import { createTamagui } from '@lightstrikelabs/tamagui'

const appConfig = createTamagui(defaultConfig)

export type AppConfig = typeof appConfig

declare module '@lightstrikelabs/tamagui' {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `@lightstrikelabs/tamagui`
    interface TamaguiCustomConfig extends AppConfig { }
}

export default appConfig 