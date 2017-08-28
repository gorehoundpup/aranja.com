import React from 'react'
import Home from './Home'
import { formatHero } from '../../utils/formatters'

export default {
  path: '/',

  async action({ context: { api } }) {
    const [pages, services, showOffs] = await Promise.all([
      api.getEntries({ content_type: 'page' }),
      api.getEntries({ content_type: 'service' }),
      api.getEntries({ content_type: 'showOff' }),
    ])

    const content = pages.items.find(
      page => page.sys.id === '4TC4xZTIYokUiC2IecUOc6'
    )
    return <Home content={content} hero={formatHero(content.fields.hero)} services={services} showOffs={showOffs} />
  },
}
