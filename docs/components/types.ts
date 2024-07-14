export interface IconItem {
  /**
   * iconify name
   */
  iconify: string
  /**
   * icon name
   */
  name: string
  /**
   * 组件名称
   */
  component: string
}

export enum IconItemType {
  SVG,
  VUE,
  REACT,
  UN_PLUGIN_ICONS,
  ICONIFY_ICON,
  UNO_CSS,
  TAILWIND,
  CSS,
}
