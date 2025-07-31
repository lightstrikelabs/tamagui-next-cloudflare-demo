import type { NextConfig } from "next";
import { withTamagui } from '@tamagui/next-plugin'

const nextConfig: NextConfig = {
  /* config options here */
};

const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
  disableExtraction: process.env.NODE_ENV === 'development',
})

export default function (name: string, { defaultConfig }: any) {
  let config = {
    ...defaultConfig,
    ...nextConfig,
  }

  return {
    ...config,
    ...tamaguiPlugin(config),
  }
}

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
