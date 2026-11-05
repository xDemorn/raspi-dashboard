import { clientEntry, on, type Handle } from 'remix/component'

export const SidebarToggle = clientEntry(
  import.meta.url,
  function SidebarToggle(handle: Handle) {
    let open = false

    let toggle = () => {
      open = !open
      document.body.classList.toggle('show-sidebar', open)
      void handle.update()
    }

    return () => (
      <div id="sidebar-toggle">
        <button
          id="open-sidebar"
          class={open ? 'btn-sidebar-toggle pointer' : 'btn-sidebar-toggle pointer active'}
          data-tooltip="Open a sidebar with more metrics"
          data-tooltip-position="left"
          type="button"
          mix={on('click', toggle)}
        >
          <img class="icon" src="/icons/right_panel_open.svg" alt="Open sidebar" />
        </button>

        <button
          id="close-sidebar"
          class={open ? 'btn-sidebar-toggle pointer active' : 'btn-sidebar-toggle pointer'}
          data-tooltip="Close the sidebar"
          type="button"
          mix={on('click', toggle)}
        >
          <img class="icon" src="/icons/right_panel_close.svg" alt="Close sidebar" />
        </button>
      </div>
    )
  },
)
