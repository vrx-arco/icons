import { type IconSet, getNPMVersion, importDirectory, runSVGO } from '@iconify/tools'
import consola from 'consola'
import { downloadTemplate } from 'giget'
import type { PluginConfig } from 'svgo'

/**
 * 加载处理图标
 * @param name 图标名称
 * @param from 来源的 iconset
 * @param to 将图标处理进的 iconset
 */
function copyIcon(name: string, from: IconSet, to?: IconSet) {
  const svg = from.toSVG(name)

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
  ;(to || from).fromSVG(name, svg!)
}

/**
 * 从 web-vue 仓库,检查是否有额外的图标
 * @param iconSet
 */
async function loadVueIcons(iconSet: IconSet) {
  consola.info('check icons from web-vue github repo')
  consola.info('download icons svg file from web-vue github repo')
  await downloadTemplate('github:arco-design/arco-design-vue/packages/web-vue/icon/_svgs', {
    forceClean: true,
    dir: '.svg',
  })
  consola.success('download web-vue icons svg file success')
  consola.info('load web-vue icons svg file')
  const vueIconSet = await importDirectory('.svg', {
    prefix: 'arco-design',
  })
  vueIconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return
    }
    if (iconSet.exists(name)) {
      return
    }
    consola.info('load additional icons from web-vue:', name)
    copyIcon(name, vueIconSet, iconSet)
  })
}

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
    copyIcon(name, iconSet)
  })

  await loadVueIcons(iconSet)

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
