import { Button } from 'components/atoms/Button'
import { DefaultTheme } from 'styled-components'

const Home = ({ theme }: { theme: DefaultTheme }) => (
  <main>
    <Button btnSize="small" btnType="primary" margin="40">
      Primary Button
    </Button>
    <Button btnSize="large" btnType="secondary">
      Secondary Button
    </Button>
  </main>
)

export default Home
