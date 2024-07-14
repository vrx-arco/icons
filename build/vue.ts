import { del, readFile, writeFile } from 'void-fs'
import type { IconSet } from '@iconify/tools'
import { pascalCase } from 'scule'
import consola from 'consola'
import { optimize } from 'svgo'

const genVueIcon = async (name: string, svg: string) => {
  const template = await readFile('template/vue.template', { cwd: import.meta.dirname })

  let str = svg

  str = optimize(str, {
    plugins: [
      'removeXMLNS',
      'removeXlink',
      {
        name: 'removeAttrs',
        params: {
          attrs: ['svg:width', 'svg:height'],
        },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            {
              width: '1em',
            },
            {
              height: '1em',
            },
          ],
        },
      },
    ],
    js2svg: { pretty: true, indent: 2 },
  }).data

  await writeFile(
    `packages/vue/src/${name}.vue`,
    template.replace('%svg%', str).replace('%name%', name)
  )

  consola.success('generate vue component:', name)
}

export const genVueIcons = async (iconSet: IconSet) => {
  await del(['packages/vue/src/*.vue', 'packages/vue/*.{js,cjs}', 'packages/vue/src/*.d.{ts,cts}'])
  const list = new Map<string, () => Promise<void>>()
  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return
    }

    list.set(`Icon${pascalCase(name)}`, () =>
      genVueIcon(`Icon${pascalCase(name)}`, iconSet.toString(name)!)
    )
  })

  await Promise.all(Array.from(list.values()).map((item) => item()))

  let entryFile = ''
  ;[...list.keys()].forEach((key) => {
    entryFile += `export { default as ${key} } from './${key}.vue'
`
  })

  await writeFile('packages/vue/src/index.ts', entryFile)
  consola.success('generate vue component finished')
}
