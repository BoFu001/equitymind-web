import { Streamdown } from 'streamdown'
import 'streamdown/styles.css'

function ReportPanel({ report, isStreaming }) {
  return (
    <div className="rounded-none px-4 py-3">
      <Streamdown isAnimating={isStreaming}>
        {report}
      </Streamdown>
    </div>
  )
}

export default ReportPanel