import { del, readFile, writeFile } from 'void-fs'
import type { IconSet } from '@iconify/tools'
import { pascalCase } from 'scule'
import consola from 'consola'
import { optimize } from 'svgo'

const genReactIcon = async (name: string, svg: string) => {
  const template = await readFile('template/react.template', { cwd: import.meta.dirname })

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
            '{...props}',
          ],
        },
      },
    ],
    js2svg: { pretty: true, indent: 2 },
  })
    .data.replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/class=/g, 'className=')

  await writeFile(
    `packages/react/src/${name}.tsx`,
    template.replace('%svg%', str).replaceAll('%name%', name)
  )

  consola.success('generate react component:', name)
}

export const genReactIcons = async (iconSet: IconSet) => {
  await del(['packages/react/src/*'])
  const list = new Map<string, () => Promise<void>>()
  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return
    }

    list.set(`Icon${pascalCase(name)}`, () =>
      genReactIcon(`Icon${pascalCase(name)}`, iconSet.toString(name)!)
    )
  })

  await Promise.all(Array.from(list.values()).map((item) => item()))

  let entryFile = ''
  ;[...list.keys()].forEach((key) => {
    entryFile += `export { default as ${key} } from './${key}'
`
  })

  await writeFile('packages/react/src/index.ts', entryFile)
  consola.success('generate react component finished')
}
