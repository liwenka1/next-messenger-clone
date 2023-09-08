import { getServerSession } from 'next-auth'

import { authOptions } from '../api/auth/[...nextauth]/route'

const getSession = async () => {
    return await getServerSession()
}

export default getSession
