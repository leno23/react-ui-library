import { h } from 'vue'
import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import * as NovaUI from '@wuyangfan/nova-ui'
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const scope = {
  React,
  ...NovaUI,
}

const ReactLiveMount = defineComponent({
  name: 'ReactLiveMount',
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const containerRef = ref<HTMLElement | null>(null)
    let root: Root | null = null

    const renderLive = () => {
      if (!containerRef.value) {
        return
      }

      if (!root) {
        root = createRoot(containerRef.value)
      }

      root.render(
        React.createElement(
          'div',
          { className: 'live-wrap' },
          React.createElement(
            LiveProvider,
            { code: props.code.trim(), scope },
            React.createElement('div', { className: 'live-pane live-preview' }, React.createElement(LivePreview, null)),
            React.createElement('div', { className: 'live-pane live-editor' }, React.createElement(LiveEditor, null)),
            React.createElement(LiveError, { className: 'live-error' }),
          ),
        ),
      )
    }

    onMounted(renderLive)

    watch(
      () => props.code,
      () => renderLive(),
    )

    onBeforeUnmount(() => {
      root?.unmount()
      root = null
    })

    return () => h('div', { ref: containerRef })
  },
})

export default ReactLiveMount
