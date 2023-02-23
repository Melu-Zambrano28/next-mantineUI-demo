import { NextPage } from 'next'
import { AppLayout } from '../components/AppLayout'

const Error404Page: NextPage = () => {
  return (
    <AppLayout>
      <div>Error 404 : Pagina non trovata</div>
    </AppLayout>
  )
}

export default Error404Page
