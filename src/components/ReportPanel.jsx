import { Streamdown } from 'streamdown'
import 'streamdown/styles.css'

function ReportPanel({ report, isStreaming }) {
  return (
    <div className="rounded-none px-4 py-3">
      <Streamdown isAnimating={isStreaming} controls={{ table: { copy: false, download: true, fullscreen: false } }}>
        {report}
      </Streamdown>
    </div>
  )
}

export default ReportPanel