import { clientEntry, on, ref, type Handle } from 'remix/component'

interface LanguageOption {
  code: string
  label: string
  flag: string
}

interface LanguageSelectorProps {
  locale: string
  options: LanguageOption[]
}

export const LanguageSelector = clientEntry(
  import.meta.url,
  function LanguageSelector(handle: Handle<LanguageSelectorProps>) {
    let open = false

    return () => {
      let { locale, options } = handle.props

      return (
        <div
          class="language-selector"
          mix={ref((node, signal) => {
            document.addEventListener(
              'click',
              (event) => {
                if (!open || node.contains(event.target as Node)) return
                open = false
                void handle.update()
              },
              { signal },
            )

            document.addEventListener(
              'keydown',
              (event) => {
                if (!open || event.key !== 'Escape') return
                open = false
                void handle.update()
              },
              { signal },
            )
          })}
        >
          <button
            class="language-trigger"
            type="button"
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="language-menu"
            mix={on('click', () => {
              open = !open
              void handle.update()
            })}
          >
            <GlobeIcon />
            <span class="language-code">{locale.toUpperCase()}</span>
            <ChevronIcon />
          </button>

          <div class="language-menu" id="language-menu" aria-label="Select language" hidden={!open}>
            {options.map((option) => (
              <a
                class="language-option"
                href={`?lang=${option.code}`}
                aria-current={option.code === locale ? 'true' : undefined}
                key={option.code}
                mix={on('click', () => {
                  open = false
                  void handle.update()
                })}
              >
                <img src={option.flag} alt="" />
                <span>{option.label}</span>
                <span class="language-check" aria-hidden="true">
                  ✓
                </span>
              </a>
            ))}
          </div>
        </div>
      )
    }
  },
)

function GlobeIcon() {
  return () => (
    <svg
      class="globe"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.9 5.6 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.6-3.9-9S9.5 5.6 12 3Z" />
    </svg>
  )
}

function ChevronIcon() {
  return () => (
    <svg
      class="chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
