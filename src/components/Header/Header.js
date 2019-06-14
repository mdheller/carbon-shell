import React from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent
} from 'carbon-components-react/lib/components/UIShell'
import Notification20 from '@carbon/icons-react/lib/notification/20'
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import Menu20 from '@carbon/icons-react/lib/menu/20'
import { Link, withRouter } from 'react-router-dom'
import { OverflowMenu } from 'carbon-components-react'
import OverflowMenuItem from 'carbon-components-react/lib/components/OverflowMenuItem'
import Responsive from 'react-responsive'

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const BurgerMenuLink = ({ history, to, ...props }) => (
  <OverflowMenuItem
    {...props}
    onClick={() => {
      history.push(to)
    }}
  />
)

const BurgerMenuLinkWithRouter = withRouter(BurgerMenuLink)

export default ({ navItems }) => (
  <Header aria-label="Carbon Admin App">
    <SkipToContent />
    <Mobile>
      <OverflowMenu
        direction="bottom"
        renderIcon={() => (
          <HeaderGlobalAction>
            <Menu20 />
          </HeaderGlobalAction>
        )}
      >
        {navItems.map(({ to, label, ...props }) => (
          <BurgerMenuLinkWithRouter key={to} to={to} itemText={label} {...props} />
        ))}
      </OverflowMenu>
    </Mobile>
    <HeaderName element={Link} to="/" prefix="">
      GPM Admin
    </HeaderName>
    <Default>
      <HeaderNavigation aria-label="Carbon App">
        {navItems.map(({ label, to, ...linkProps }) => (
          <HeaderMenuItem element={Link} to={to} {...linkProps}>
            {label}
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>
    </Default>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
)
