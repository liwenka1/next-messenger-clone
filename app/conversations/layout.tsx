import getConversations from '../actions/getConversations'
import Sidebar from '../components/sidebar/Sidebar'
import ConversationsList from './components/ConversationsList'

const ConversationsLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const conversations = await getConversations()

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default ConversationsLayout
