import { Application } from "@hotwired/stimulus"
import "@rails/actiontext"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

import "rhino-editor"
import "rhino-editor/exports/styles/trix.css"
