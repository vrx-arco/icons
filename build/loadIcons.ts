import { downloadTemplate } from 'giget'
import { getNPMVersion, importDirectory, runSVGO } from '@iconify/tools'
import consola from 'consola'
import type { PluginConfig } from 'svgo'

export async function loadIcons() {
  consola.info('download icons svg file from github repo')
  await downloadTemplate('github:arco-design/arco-design/icon/_svgs', {
    forceClean: true,
    dir: '.svg',
  })
  consola.success('download icons svg file success')
  consola.info('load icons svg file')
  const iconSet = await importDirectory('.svg', {
    prefix: 'arco-design',
  })

  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return
    }

    const svg = iconSet.toSVG(name)

    const plugins: PluginConfig[] = [
      'removeUnknownsAndDefaults',
      'cleanupAttrs',
      'removeXMLNS',
      'removeDoctype',
      'removeXMLProcInst',
      'removeComments',
      'removeMetadata',
      'removeTitle',
      'removeDesc',
      'removeUselessDefs',
      'removeEditorsNSData',
      'removeEmptyAttrs',
      'removeHiddenElems',
      'removeEmptyText',
      'removeEmptyContainers',
      'cleanupEnableBackground',
      'convertStyleToAttrs',
      'convertColors',
      'convertPathData',
      'convertTransform',
      'removeNonInheritableGroupAttrs',
      'removeUselessStrokeAndFill',
      'removeUnusedNS',
      'cleanupIds',
      'cleanupNumericValues',
      'moveElemsAttrsToGroup',
      'moveGroupAttrsToElems',
      'collapseGroups',
      'mergePaths',
      'convertShapeToPath',
      'sortAttrs',
      'removeDimensions',
    ]
    if (name.endsWith('color')) {
      plugins.push('removeStyleElement')
      plugins.push('removeEmptyContainers')
    }
    runSVGO(svg!, {
      plugins,
    })

    iconSet.fromSVG(name, svg!)
  })

  const version = await getNPMVersion({ package: '@arco-design/web-react' })

  iconSet.info = {
    author: {
      name: 'ArcoDesign Team',
      url: 'https://github.com/arco-design/arco-design',
    },
    version: version.version,
    license: {
      title: 'MIT',
      spdx: 'MIT',
      url: 'https://github.com/arco-design/arco-design/blob/main/LICENSE',
    },
    palette: false,
    name: 'ArcoDesign Icons',
  }

  consola.success('load icons svg file success')

  return iconSet
}
