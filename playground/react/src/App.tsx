import { createElement, useState } from 'react'
import * as Icons from '@vrx-arco/icons-react'

export const App = () => {
  const [list] = useState(Object.values(Icons))
  return (
    <div className="grid grid-cols-24">
      {list.map((Icon) => (
        <div
          className="p-10px hover:bg-gray-100 flex flex-col items-center justify-center text-30px"
          key={Icon.displayName}
        >
          {createElement(Icon)}
        </div>
      ))}
    </div>
  )
}
