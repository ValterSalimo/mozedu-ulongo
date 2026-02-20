'use client'

import { ChatPanel } from '@/components/chatbot/chat-widget'

/**
 * Full-page chatbot view at /parent/chatbot
 * Renders the same ChatPanel used in the floating widget, but in full-page layout.
 */
export default function ChatbotPage() {
  return (
    <div className="fixed inset-0 bg-card z-50 flex flex-col">
      <ChatPanel
        onClose={() => window.history.back()}
        fullPage
      />
    </div>
  )
}
