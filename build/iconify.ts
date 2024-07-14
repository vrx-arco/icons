import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { type IconSet, exportJSONPackage } from '@iconify/tools'
import consola from 'consola'
import pkg from '../package.json'

export async function genIconifyJsonPackage(iconSet: IconSet) {
  consola.info('export icons as iconify package')
  await exportJSONPackage(iconSet, {
    target: 'packages/iconify',
    package: {
      name: '@vrx-arco/iconify-json',
      version: pkg.version,
      homepage: pkg.homepage,
      publishConfig: {
        access: 'public',
      },
      repository: {
        type: 'git',
        url: 'git+https://github.com/vrx-arco/icons.git',
      },
    },
    cleanup: true,
    customFiles: {
      'README.md': await readFile(
        join(import.meta.dirname, 'template', 'ICONIFY_README.md'),
        'utf-8'
      ),
    },
  })

  consola.success('export icons as iconify package success')
}
